import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  border-top: 1px solid #ddd;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export const MetaContent = styled.div``;

export const Item = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 120px 4fr;
`;

export const Title = styled.span`
  color:  var(--colorPrimary);;
  font-size: 13px;
`;

export const Links = styled.span`
  font-size: 13px;

  & > span {
    margin: 0 5px;
    border-right: 1px solid #333;
    padding: 0 10px 0 0;
    cursor: pointer;

    &:hover {
      color:  var(--colorPrimary);;
    }
  }
  & > span:last-child {
    border: none;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  object-fit: scale-down;
  display: block;
  margin: 0 20px;
`;
