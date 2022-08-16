import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { SpinnerProps } from '.';

type ContainerProps = SpinnerProps;

const containerModifiers = {
  xsmall: () => css`
    border: 0.5rem solid;
    border-top: 0.5rem solid;
    height: 2rem;
    width: 2rem;
  `,
  small: () => css`
    border: 0.8rem solid;
    border-top: 0.8rem solid;
    height: 5rem;
    width: 5rem;
  `,
  medium: () => css`
    border: 1rem solid;
    border-top: 1rem solid;
    height: 7rem;
    width: 7rem;
  `,
  large: () => css`
    border: 1.2rem solid;
    border-top: 1.2rem solid;
    height: 10rem;
    width: 10rem;
  `,
  white: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.white};
    border-top-color: ${darken(0.2, theme.colors.white)};
  `,
  gray: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.gray};
    border-top-color: ${darken(0.2, theme.colors.gray)};
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, size, color }) => css`
    border: 1.3rem solid;
    border-top: 1.3rem solid;
    border-radius: 50%;
    animation: spin 2s linear infinite;

    ${!!size && containerModifiers[size]()}
    ${!!color && containerModifiers[color](theme)}

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
