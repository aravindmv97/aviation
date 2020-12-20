import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 380px;
  width: 280px;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cover = styled.img`
  border-radius: 10px;
  height: 200px;
  width: 260px;
  display: block;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-weight: bold;
  margin: 10px auto;
  text-align: center;
`;

export const Info = styled.div`
  text-align: center;
  margin: 20px auto;
`;

export const CTA = styled.div`
  height: 30px;
  padding: 14px;
  border-radius: 4px;
  color: #fff;
  background: var(--colorPrimary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0px auto;
`;
