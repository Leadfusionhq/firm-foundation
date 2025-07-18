const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_BASE = `/api`;

// here are base api:::::
const AUTH_API_BASE = `${API_BASE}/auth`;
const USER_API_BASE = `${API_BASE}/admin/users`;

export const API_URL = {

    // Admin User Management URLs
    GET_ALL_USERS: `${USER_API_BASE}/`,
    UPDATE_USER: `${USER_API_BASE}/user/edit/:id`,


    // Auth URLs
    LOGIN_USER: `${AUTH_API_BASE}/login`,
    REGISTER_USER: `${AUTH_API_BASE}/register`, 
    LOGOUT_USER: `${AUTH_API_BASE}/logout`, 

};
