import * as S from './styles';

export type SpinnerProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  color?: 'white' | 'gray';
};

export const Spinner = ({ size = 'medium', color = 'gray' }: SpinnerProps) => {
  return <S.Container size={size} color={color} />;
};
