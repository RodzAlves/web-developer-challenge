import React from 'react';
import * as S from './styles';
import { Spinner } from '@/components/Elements';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  color?: 'black' | 'gray';
  variant?: 'solid' | 'underline';
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  color = 'gray',
  variant = 'solid',
  isLoading = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.Container
      size={size}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {isLoading ? <Spinner size="xsmall" color="white" /> : children}
    </S.Container>
  );
};
