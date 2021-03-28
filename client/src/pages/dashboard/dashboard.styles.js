import styled from "styled-components";
import { Card } from "../pages.styles";
import { midnightBlue, paleGray } from '../../sharedStyles/colors'

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
`;

// CARD STYLES

export const CardBalances = styled(Card)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  grid-column-start: span 3;
`;

export const CardTransactions = styled(Card)`
  grid-column-start: span 2;
  grid-row-start: span 2;
`;

export const CardBudget = styled(Card)`
  grid-row-start: span 2;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-decoration: none;
  height: 1.5rem;
  font-size: 1.25rem;
  color: ${midnightBlue};

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

export const CardBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1rem;
  overflow: scroll;
`;

// TRANSACTION CARD STYLES

export const TransactionRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0.15rem 0rem;

  &:nth-child(even) {
    background-color: ${paleGray};
  }

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > div:first-child {
    flex: 0.2 0;
  }

  & > div:nth-child(2) {
    flex: 0.6 0;
  }

  & > div:nth-child(3) {
    flex: 0.2 0;
    text-align: right;
  }
`;

export const TransactionTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0.15rem 0rem;

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
  }

  & > div:first-child {
    flex: 0.2 0;
  }

  & > div:nth-child(2) {
    flex: 0.6 0;
  }

  & > div:nth-child(3) {
    flex: 0.2 0;
    text-align: right;
  }
`;

// BALANCE CARD STYLES 

export const BalanceContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const CategoryColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const CategoryTitle = styled.div`
  font-weight: 700;
`;