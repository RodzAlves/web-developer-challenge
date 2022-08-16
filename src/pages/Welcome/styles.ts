import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    max-width: 30rem;
    text-align: center;
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50rem;
    max-width: ${theme.grid.container};
    width: 100%;
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.medium};
    border: 0.1rem solid ${theme.colors.gray};
  `}
`;
