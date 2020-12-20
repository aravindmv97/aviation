import React, { useState } from 'react';

import * as Styles from './styles';

export default function Input(props) {
  const {
    name,
    label,
    value,
    placeholder,
    errorLabel,
    width,
    mWidth,
    height,
    mHeight,
    margin,
    mMargin,
    type,
    bordered,
    className,
    handleInputs,
    onClickProps,
    onKeyUpProps,
    onBlurProps,
    inputType,
    selectOptions
  } = props;

  // const [showPass, setShowPass] = useState(false);

  return (
    <Styles.Wrapper
      width={width}
      mWidth={mWidth}
      height={height}
      mHeight={mHeight}
      margin={margin}
      mMargin={mMargin}
      className={className}
    >
      <Styles.InputBox bordered={bordered}>
        <Styles.InputWrapper>
          {inputType !== 'select' ? (
            <Styles.InputComponent
              className="input"
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={handleInputs}
              type={type || 'text'}
              onClick={onClickProps}
              onBlur={onBlurProps}
              onKeyUp={onKeyUpProps}
              autoComplete={'none'}
            />
          ) : (
            <Styles.SelectComponent
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={handleInputs}
              onBlur={onBlurProps}
              onClick={onClickProps}
            >
              <option defaultValue="" selected>
                {placeholder}
              </option>
              {selectOptions?.length &&
                selectOptions.map(opt => (
                  <option value={opt.value}>{opt.displayName}</option>
                ))}
            </Styles.SelectComponent>
          )}
          {label ? (
            <Styles.Label
              bordered={bordered}
              filled={Boolean(value && value.length)}
            >
              {label}
            </Styles.Label>
          ) : null}
        </Styles.InputWrapper>
      </Styles.InputBox>
      {errorLabel ? <Styles.ErrorLabel>{errorLabel}</Styles.ErrorLabel> : null}
    </Styles.Wrapper>
  );
}
