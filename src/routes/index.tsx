import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../views/Login';
import Fields from '../views/Fields';
import Layout from '../views/Layout';
import { ROUTES } from '../constants/routes';

import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Navigate to={ROUTES.FIELDS} />}/>
        <Route path={ROUTES.LOGIN} element={<GuestRoute><Layout><Login /></Layout></GuestRoute>}/>
        <Route path={ROUTES.FIELDS} element={<ProtectedRoute><Layout><Fields /></Layout></ProtectedRoute>}/>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;