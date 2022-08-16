import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    width: 100%;
    flex: 1;
    padding: ${theme.spacings.medium};
    height: 100%;
    background-color: ${theme.colors.primary};
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius.small};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 9rem;
    height: 9rem;
    border-radius: calc(${theme.border.radius.medium} * 4.5);
    object-fit: cover;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Message = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    max-width: 30rem;
    width: 100%;
    height: 100%;
    word-wrap: break-word;
    text-align: justify;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};

    @media (max-width: 524px) {
      max-width: 20rem;
    }
  `}
`;

export const Creator = styled.h3`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};

    span {
      margin-bottom: ${theme.spacings.xxsmall};
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const Delete = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  `}
`;
