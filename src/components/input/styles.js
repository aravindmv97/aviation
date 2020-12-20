import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${props => props.width || '320px'};
  height: ${props => props.height || '44px'};
  margin: ${props => props.margin || '0'};

  & > div > div > input,
  & > div > div > select {
    width: ${props => props.width || '320px'};
    height: ${props => props.height || '44px'};
  }

  @media (max-width: 700px) {
    width: ${props => props.mWidth || '100%'};
    height: ${props => props.mHeight || '44px'};
    margin: ${props => props.mMargin || props.margin || '0'};
  }
`;

export const InputBox = styled.div`
  border-radius: ${props => (props.bordered ? '8px' : '0')};
  height: 100%;
  width: 100%;
  padding: 2px;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const InputComponent = styled.input`
  outline: 0;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 16px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const SelectComponent = styled.select`
  outline: 0;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 16px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: ${props => (props.filled ? '12px' : '16px')};
  color: #8990a1;
  position: absolute;
  margin: auto;
  height: max-content;
  top: ${props => (props.filled ? '-10px' : '0')};
  bottom: ${props => (props.filled ? 'auto' : '0')};
  left: ${props => (props.bordered ? (props.filled ? '5px' : '15px') : '0')};
  background: #fff;
  padding: 0 3px;
  transition: 0.2s ease;
  pointer-events: none;

  ${InputComponent}:focus ~ &,
  ${InputComponent}:valid {
    top: -10px;
    left: ${props => (props.bordered ? '5px' : '0')};
    bottom: auto;
    font-size: 12px;
  }
`;

export const ErrorLabel = styled.div`
  color: red;
  font-size: 11px;
  text-align: left;
  margin: 2px 5px;
`;
