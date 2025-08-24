// src/app/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from '../layouts/RootLayout';
import Loading from '../components/Loading/Loading';

// Lazy pages
const Home = lazy(() => import('../pages/Home/Home'));
const Team = lazy(() => import('../pages/Team'));

export const router = createBrowserRouter([
  {
    element: <RootLayout />, // wrap all children with RootLayout
    children: [
      { path: '/', element: <Home />, loadingElement: <Loading /> },
      { path: '/team', element: <Team />, loadingElement: <Loading /> },
    ],
  },
]);
