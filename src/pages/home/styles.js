import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 3fr 1fr;
  grid-gap: 20px;
  width: 1300px;
  margin: 0 auto;
`;

export const NavWrapper = styled.div`
  & > div {
    background: transparent;
    opacity: ${props => (!props.showMenu ? 1 : 0)};
    transition: 0.2s ease;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LeadFormWrapper = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 100px;
  height: max-content;
  
  & > div:first-child {
    color: #fff;
    background:  var(--colorPrimary);;
    border-radius: 10px;
    padding: 10px;
  }
`;
