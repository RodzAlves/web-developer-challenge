import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from '@/pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to="." />,
  },
];

export { routes };
