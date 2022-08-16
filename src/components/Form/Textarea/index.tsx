import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import * as S from './styles';

export type TextareaProps = {
  name?: string;
  label?: string;
  error?: FieldError | undefined;
  registration: Partial<UseFormRegisterReturn>;
};

export const Textarea = ({
  name,
  label,
  registration,
  error,
}: TextareaProps) => (
  <S.Container>
    <S.Textarea
      name={name}
      placeholder={label}
      hasError={!!error?.message}
      {...registration}
    />
    {error?.message && <S.Error>{error.message}</S.Error>}
  </S.Container>
);
