import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    flex: 1;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.background};
    color: ${theme.colors.gray};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: ${theme.grid.container};
    width: 100%;
  `}
`;
