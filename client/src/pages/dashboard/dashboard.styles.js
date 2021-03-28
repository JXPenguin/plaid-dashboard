import styled from "styled-components";
import { Card } from '../pages.styles'

export const GridLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 90%;
  margin: 1rem;

  min-width: 60rem;
  min-height: 30rem;
`;

export const LoadingLayout = styled.div`
  display: flex;
  flex: 1 0;
  font-weight: 500;
  font-size: 1.5rem;
  color: black;
  text-align: center;
`

export const CardBalances = styled(Card)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  grid-column-start: span 3;
`;

export const CardTransactions = styled(Card)`
  grid-row-start: span 2;
`

export const CardBudget = styled(Card)`
  grid-column-start: span 2;
  grid-row-start: span 2;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-decoration: none;
  height: 1.5rem;

  & > div {
    margin-left: 1rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: center;
  align-items: center;
`;