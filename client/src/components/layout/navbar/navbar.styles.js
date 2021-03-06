import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 0px 15px 1px #e6e6e6;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 3rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 15rem;
  font-size: 1.25rem;

  & > * {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
  }
`;

export const PlaidLink = styled.div``;
