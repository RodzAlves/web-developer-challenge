import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: ${theme.spacings.medium};
    min-height: 35rem;
    height: 100%;
    background-color: ${theme.colors.primary};
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius.small};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.medium};
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: right;
    width: 100%;

    @media (max-width: 30rem) {
      flex-direction: column;
      align-items: center;

      & > button {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`;
