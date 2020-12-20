import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
`;

export const Item = styled.div`
  position: relative;

  & > div:first-child:hover ~ div {
    display: ${props => (props.showSubCat ? `block` : 'none')};
  }

  & > div:last-child:hover {
    display: ${props => (props.showSubCat ? `block` : null)};
  }
`;

export const ItemWrapper = styled.div`
  padding: 10px 6px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background: #eee;
    color:  var(--colorPrimary);;
  }
`;

export const SubCatWrapper = styled.div`
  display: none;
  position: absolute;
  box-shadow: 0px 10px 12px #eee;
  border-radius: 10px;
  padding: 20px;
  top: 0;
  right: -150px;
  background: #fff;
  width: 120px;
  background: #fff;
  z-index: 2;

  & > span {
    display: block;
    padding: 10px 6px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background: #eee;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 0;
    height: 35px;
    width: 100px;
    background: transparent;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: 15px;
    background: #fff;
    border: 5px solid #fff;
    border-left: 5px solid #fff;
    border-bottom: 5px solid #fff;
    height: 5px;
    width: 5px;
    z-index: 2;
    transform: rotate(45deg);
  }
`;

export const Icon = styled.img`
  margin: 0 15px 0 0;
  height: 15px;
  width: 15px;
`;

export const Title = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: ${props => (props.showArrow ? `""` : null)};
    display: inline-block;
    margin: 0 0 0 6px;
    height: 5px;
    width: 5px;
    border: 1px solid #fff;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
  }
`;
