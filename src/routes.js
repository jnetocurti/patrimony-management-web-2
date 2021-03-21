import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import NotFoundView from 'src/views/errors/NotFoundView';
import DashboardLayout from 'src/layouts/DashboardLayout';
import RealEstateFundsView from './views/realEstateFunds';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'real-estate-funds', element: <RealEstateFundsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Navigate to="/app/real-estate-funds" /> }
    ]
  }
];

export default routes;
