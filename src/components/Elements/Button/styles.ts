import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = Omit<ButtonProps, 'children' | 'onClick'>;

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  solid: (theme: DefaultTheme, color: 'black' | 'gray') => css`
    transition: color 0.2s ease-in-out;

    ${color === 'black' &&
    css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.lightGray};

      &:hover,
      &:focus {
        background-color: ${darken(0.2, theme.colors.black)};
      }
    `}

    ${color === 'gray' &&
    css`
      background-color: ${theme.colors.gray};
      color: ${theme.colors.black};

      &:hover,
      &:focus {
        background-color: ${darken(0.2, theme.colors.gray)};
      }
    `}
  `,
  underline: (theme: DefaultTheme, color: 'black' | 'gray') => css`
    background: none;
    border: none;
    text-decoration: underline;
    color: ${theme.colors[color]};

    &:hover,
    &:focus {
      transition: color 0.2s ease-in-out;
      color: ${darken(0.2, theme.colors[color])};
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, variant, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;

    ${!!size && containerModifiers[size](theme)};
    ${!!variant && containerModifiers[variant](theme, color!)};
    ${fullWidth && containerModifiers.fullWidth()};
  `}
`;
