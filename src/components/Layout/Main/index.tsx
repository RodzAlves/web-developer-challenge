import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Elements';
import * as S from './styles';

export const MainLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
};
