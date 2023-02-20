import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import store from '../store';
import { ROUTES } from '../constants/routes';

const ProtectedRoute = ({ children, redirectPath = ROUTES.LOGIN }: { children: JSX.Element, redirectPath?: string }) => {
  if (!store.authStore.isAuthorized) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default observer(ProtectedRoute);