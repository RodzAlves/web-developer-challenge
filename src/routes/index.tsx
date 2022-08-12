import { useRoutes } from 'react-router-dom';

import { routes } from './routes';

export const AppRoutes = () => {
  const elements = useRoutes(routes);

  return elements;
};
