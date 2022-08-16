import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Elements';
import * as S from './styles';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Box>
        <S.Title>Welcome to Buildbox</S.Title>

        <S.Description>
          Web Challenge proposed by BuildBox IT Solutions to Javascript Senior
          Developer.
        </S.Description>

        <Button color="black" onClick={() => navigate('/app')}>
          Log in
        </Button>
      </S.Box>
    </S.Container>
  );
};
