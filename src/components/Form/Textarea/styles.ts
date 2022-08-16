import styled, { css } from 'styled-components';

type TextareaProps = {
  hasError: boolean;
};

export const Container = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea<TextareaProps>`
  ${({ theme, hasError }) => css`
    width: 100%;
    height: 8rem;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.medium};
    border: none;
    outline: none;
    resize: none;

    ::placeholder {
      color: ${theme.colors.lightGray};
    }

    &:focus {
      transition: border 0.2s ease-in-out;
      border: 0.1rem solid ${theme.colors.lightGray};
    }

    ${hasError &&
    css`
      border: 0.1rem solid ${theme.colors.error};
    `}
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.small};
  `}
`;
