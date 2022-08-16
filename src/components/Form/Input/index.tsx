import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import * as S from './styles';

export type InputProps = {
  type?: 'text' | 'email' | 'password';
  name?: string;
  label?: string;
  error?: FieldError | undefined;
  registration: Partial<UseFormRegisterReturn>;
};

export const Input = ({
  name,
  label,
  type = 'text',
  registration,
  error,
}: InputProps) => (
  <S.Container>
    <S.Input
      name={name}
      placeholder={label}
      type={type}
      hasError={!!error?.message}
      {...registration}
    />
    {error?.message && <S.Error>{error.message}</S.Error>}
  </S.Container>
);
