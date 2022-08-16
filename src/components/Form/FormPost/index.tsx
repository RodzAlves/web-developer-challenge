import { Button } from '@/components/Elements';
import { ImageUploader, Input, Textarea } from '@/components/Form';
import { usePostsStore } from '@/stores';
import { PostInput } from '@/types/post';
import { postSchema } from '@/validations/post';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import * as S from './styles';

export const FormPost = () => {
  const methods = useForm<PostInput>({
    resolver: zodResolver(postSchema),
  });
  const addPost = usePostsStore((store) => store.addPost);

  const onSubmitHandler = (data: PostInput) => {
    const post = {
      message: data.message,
      creator: data.creator,
      imageUrl: URL.createObjectURL(data.image[0]),
    };

    addPost(post);
    methods.reset();
  };

  return (
    <S.Container>
      <FormProvider {...methods}>
        <S.Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <ImageUploader
            name="image"
            registration={methods.register('image')}
            error={methods.formState.errors['image']}
          />

          <Input
            name="creator"
            label="Digite seu nome"
            registration={methods.register('creator')}
            error={methods.formState.errors['creator']}
          />
          <Textarea
            name="message"
            label="Digite sua mensagem"
            registration={methods.register('message')}
            error={methods.formState.errors['message']}
          />

          <S.Actions>
            <Button
              type="button"
              variant="underline"
              onClick={() => {
                methods.reset();
                methods.clearErrors();
              }}
            >
              Descartar
            </Button>
            <Button type="submit">Publicar</Button>
          </S.Actions>
        </S.Form>
      </FormProvider>
    </S.Container>
  );
};
