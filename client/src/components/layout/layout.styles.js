import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  min-height: -webkit-fill-available;
`;

export const SideBarMenu = styled.div`
  position: sticky;
  /* flex: 0.15;s */
  min-width: 12rem;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  background-color: #191354;
  color: white;
  /* height: 100vh; */

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`;

export const SideBarBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.8 0;
  width: 100%;
  padding: 2rem 0rem;
`;

export const SideBarFooter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.2 0;
  padding: 2rem 0rem;
  width: 100%;
`;

export const OptionContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${({ selected }) => (selected ? "#483981" : "none")};
  padding: 0.35rem 1rem;
  cursor: pointer;
  height: 1.5rem;

  &:hover {
    background-color: #7663b0;
    transition: all 0.2s ease-in;
  }

  & > div {
    margin-left: 1rem;
  }
`;

// #483981 selected
