import axios from 'axios';
import toast from 'react-hot-toast';

axios.interceptors.response.use(
  (response: any) => {
    const { config, data } = response;
    const { method } = config;

    if (method && ['post', 'put', 'delete', 'patch'].includes(method)) {
      if (data?.message === '') {
        return response;
      }

      toast.dismiss(); // Dismiss previous toasts
      const successMessage = data?.message || data?.desc || 'Operation successful';
      toast.success(successMessage, {
        position: 'top-right',
        duration: 2000,
        style: {
          background: '#4caf50',
          color: '#fff',
        },
      });
    }

    return response;
  },
  (error: any) => {
    if (error.response?.status === 401 || error.response?.statusText === 'Unauthorized') {
      localStorage.clear();
      toast.dismiss(); // Dismiss previous toasts
      toast.error('Session expired or unauthorized. Please login again.', {
        position: 'top-right',
        duration: 4000,
        style: {
          background: '#f44336',
          color: '#fff',
        },
      });
      // Do NOT redirect here; let the component handle navigation if needed
    }

    const errorData = error.response?.data as any;
    const errorMessage = errorData?.message || errorData?.desc || error.message;

    if (errorMessage === 'Validation failed') {
      toast.dismiss(); // Dismiss previous toasts
      toast.error(errorData?.validation?.body?.message || 'Validation error', {
        position: 'top-right',
        duration: 4000,
        style: {
          background: '#f44336',
          color: '#fff',
        },
      });
    } else {
      toast.dismiss(); // Dismiss previous toasts
      toast.error(errorMessage, {
        position: 'top-right',
        duration: 4000,
        style: {
          background: '#f44336',
          color: '#fff',
        },
      });
    }

    return Promise.reject(error);
  }
);

const axiosWrapper = async (method: 'get' | 'post' | 'put' | 'delete' | 'patch', url: string, data?: any, token?: string, isFormData = false) => {
  try {
    const config: any = {
      method,
      url,
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
    };

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (data) {
      config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.response ? error.response.data : error);
  }
};

export default axiosWrapper;
