import { Post } from '@/components/Elements/Post';
import { FormPost } from '@/components/Form';
import { usePostsStore } from '@/stores';

import * as S from './styles';

export const Home = () => {
  const posts = usePostsStore((store) => store.posts);

  return (
    <S.Container>
      <S.Content>
        <FormPost />

        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </S.Content>
    </S.Container>
  );
};
