import React from 'react';
import { StyledInput } from '@/styles/styled';
import { css } from 'styled-components';

const Input = ({
  children,
  extraStyle,
  className,
  value,
  onChange,
  type,
  ref,
}) => {
  const additionalStyles = css`
    ${extraStyle}
  `;

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      ref={ref}
      className={`input-field ${className}`}
      css={additionalStyles}>
      {children}
    </StyledInput>
  );
};

export default Input;
