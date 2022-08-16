import deleteIcon from '@/assets/delete.svg';
import { PostType, usePostsStore } from '@/stores';

import * as S from './styles';

export const Post = ({ id, creator, message, imageUrl }: PostType) => {
  const deletePost = usePostsStore((store) => store.deletePost);

  return (
    <S.Container>
      <S.Image src={imageUrl} alt={creator} />

      <S.Content>
        <S.Message>{message}</S.Message>
        <S.Creator>
          <span>Enviado por</span>
          {creator}
        </S.Creator>
      </S.Content>

      <S.Delete onClick={() => deletePost(id)}>
        <img src={deleteIcon} alt="Delete Icon" />
      </S.Delete>
    </S.Container>
  );
};
