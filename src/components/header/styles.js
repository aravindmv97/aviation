import styled from 'styled-components';
import Input from '../input';

export const Wrapper = styled.div`
  position: relative;
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Container = styled.div`
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.img`
  position: absolute;
  left: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const Logo = styled.img`
  position: absolute;
  left: 80px;
  cursor: pointer;
`;

export const Search = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 180px;
`;

export const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 10px;
  cursor: pointer;
`;

export const StyledInput = styled(Input)`
  & > div > div > input {
    border: 1px solid #eee;

    &:focus {
      border: 1px solid  var(--colorPrimary);;
    }
  }
`;

export const Contact = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  cursor: pointer;
`;

export const SideNavWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: 0px 10px 12px #eee;
  border-radius: 10px;
`;

export const CallIcon = styled.img`
  height: 15px;
  width: 15px;
  margin: 0 8px 0 0;
`;
