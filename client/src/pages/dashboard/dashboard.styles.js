import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 90%;
  margin: 1rem;

  /* min-width: 20rem;
  min-height: 40rem; */
`;

export const GridCard = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  box-shadow: 0px 0px 10px 1px  #e6e6e6;
  padding: 1rem;
  background-color: white;
`

export const GridCardBalances = styled(GridCard)`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  grid-column-start: span 3;
`;

export const GridCardTransactions = styled(GridCard)`
  grid-row-start: span 2;
`

export const GridCardBudget = styled(GridCard)`
  grid-column-start: span 2;
  grid-row-start: span 2;
`
