import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../views/Login';
import Fields from '../views/Fields';
import Layout from '../views/Layout';
import { ROUTES } from '../constants/routes';

import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<ProtectedRoute><Navigate to={ROUTES.FIELDS} replace /></ProtectedRoute>}/>
        <Route path={ROUTES.LOGIN} element={<GuestRoute><Layout><Login /></Layout></GuestRoute>}/>
        <Route path={ROUTES.FIELDS} element={<ProtectedRoute><Layout><Fields /></Layout></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;