import { Feed } from '@/components/Elements';
import { FormPost } from '@/components/Form';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <FormPost />

        <Feed />
      </S.Content>
    </S.Container>
  );
};
