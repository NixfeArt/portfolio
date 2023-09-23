import React, { forwardRef } from 'react';
import { StyledInput } from '@/styles/styled';
import { css } from 'styled-components';

const Input = forwardRef(({
  children,
  extraStyle,
  className,
  value,
  onChange,
  type,
  name,
}, ref) => {
  const additionalStyles = css`
    ${extraStyle}
  `;

  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      ref={ref}
      className={`input-field ${className}`}
      css={additionalStyles}>
      {children}
    </StyledInput>
  );
});

export default Input;