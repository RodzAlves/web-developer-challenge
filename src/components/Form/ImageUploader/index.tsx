import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
  UseFormRegisterReturn,
} from 'react-hook-form';
import backgroundInput from '@/assets/image.svg';
import trashIcon from '@/assets/trash.svg';
import * as S from './styles';

export type ImageUploaderProps = {
  name: string;
  error?:
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<File>>>
    | FieldError
    | undefined;
  registration: UseFormRegisterReturn;
};

export const ImageUploader = ({
  name,
  registration,
  error,
}: ImageUploaderProps) => {
  const { watch, resetField } = useFormContext();

  return (
    <S.Container>
      <S.ImageUploader
        id="image"
        type="file"
        accept=".jpg,.jpeg,.png"
        {...registration}
        name={name}
      />
      <div>
        <S.Label htmlFor="image" hasError={!!error?.message}>
          <S.ImagePreview>
            {watch(name) && watch(name)[0] ? (
              <img
                className="preview"
                src={URL.createObjectURL(watch(name)[0])}
                alt="Preview"
              />
            ) : (
              <img src={backgroundInput} alt="Placeholder Image Preview" />
            )}
          </S.ImagePreview>
        </S.Label>
        <S.Delete
          type="button"
          onClick={() => {
            resetField(name);
          }}
        >
          <img src={trashIcon} alt="Trash Icon" />
        </S.Delete>
      </div>

      {error?.message && <S.Error>{error.message}</S.Error>}
    </S.Container>
  );
};
