import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import auth from '../store/auth';
import { ROUTES } from '../constants/routes';

const ProtectedRoute = ({ children, redirectPath = ROUTES.LOGIN }: { children: JSX.Element, redirectPath?: string }) => {
  if (!auth.isAuthorized) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default observer(ProtectedRoute);