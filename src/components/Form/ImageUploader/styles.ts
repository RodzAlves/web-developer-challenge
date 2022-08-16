import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Label = styled.label<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    display: block;
    width: 9rem;
    height: 9rem;
    border-radius: calc(${theme.border.radius.medium} * 4.5);
    border: 0.1rem solid ${theme.colors.lightGray};
    cursor: pointer;

    ${hasError &&
    css`
      border-color: ${theme.colors.error};
    `}
  `}
`;

export const Delete = styled.button`
  ${({ theme }) => css`
    display: flex;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: ${theme.spacings.small};
    width: 3rem;
    height: 3rem;
  `}
`;

export const ImageUploader = styled.input`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.medium};
    border: none;
    outline: none;

    ::placeholder {
      color: ${theme.colors.lightGray};
    }

    &:focus {
      transition: border 0.2s ease-in-out;
      border: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.small};
  `}
`;

export const ImagePreview = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: calc(${theme.border.radius.medium} * 4);
    }
  `}
`;
