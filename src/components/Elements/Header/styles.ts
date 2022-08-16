import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 9.5rem;
    background: ${theme.colors.black};
  `}
`;

export const Logo = styled.img``;
