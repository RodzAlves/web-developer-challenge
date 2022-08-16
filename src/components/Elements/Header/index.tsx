import Logo from '@/assets/bx-logo.png';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Logo src={Logo} />
    </S.Container>
  );
};
