'use client';

import { useEffect, PropsWithChildren } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collapseSidebar, toggleAutoCollapse } from '@/redux/theme/theme_slice';
import { RootState } from '@/redux/store';
import Topbar from '../Topbar/Topbar';

const MainPanel = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: RootState) => state.theme.collapsed);
  const autoCollapsed = useSelector((state: RootState) => state.theme.autoCollapsed);

  useEffect(() => {
    const handleResize = () => {
      dispatch(collapseSidebar(false));
      dispatch(toggleAutoCollapse(false));
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div className={`main-panel ${collapsed || autoCollapsed ? 'full-width-panel' : ''}`}>
        <Topbar />
      <div className="main-content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default MainPanel;
