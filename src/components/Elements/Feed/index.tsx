import { usePostsStore } from '@/stores';
import { Post } from '@/components/Elements';

import * as S from './styles';

export const Feed = () => {
  const posts = usePostsStore((store) => store.posts);

  return (
    <S.Container>
      <S.Title>Feed</S.Title>

      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </S.Container>
  );
};
