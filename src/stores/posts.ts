import { nanoid } from 'nanoid';
import create from 'zustand';

export type PostType = {
  id: string;
  creator: string;
  message: string;
  imageUrl: string;
};

type PostsStore = {
  posts: PostType[];
  addPost: (post: Omit<PostType, 'id'>) => void;
  deletePost: (id: string) => void;
};

export const usePostsStore = create<PostsStore>((set, get) => ({
  posts: [],
  addPost: (post) => {
    const newPost = {
      ...post,
      id: nanoid(),
    };

    set((state) => ({
      ...state,
      posts: [...state.posts, newPost],
    }));
  },
  deletePost: (id) => {
    set((state) => ({
      ...state,
      posts: state.posts.filter((post) => post.id !== id),
    }));
  },
}));
