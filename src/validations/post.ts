import * as z from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const postSchema = z.object({
  message: z.string().min(1, 'A mensagem é obrigatória.').max(255),
  creator: z.string().min(1, 'O nome é obrigatório.').max(255),
  image: z
    .any()
    .refine((files) => files?.length === 1, 'A imagem é obrigatória.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `O tamanho máximo da imagem é 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png são os tipos de arquivos aceitos.'
    ),
});
