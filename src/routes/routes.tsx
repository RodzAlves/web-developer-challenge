import { Navigate, RouteObject } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Welcome } from '@/pages/Welcome';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
      {
        index: true,
        path: '/app',
        element: <Home />,
      },
    ],
  },
];

export { routes };
