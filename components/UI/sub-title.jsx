'use client'
import { StyledSubTitle } from '@/styles/styled';
import { css } from 'styled-components';
import React from 'react';

const SubTitle = ({
  children,
  isRoboto = true,
  extraStyle,
  className,
  align='center'
}) => {

  const font = isRoboto ? 'font-roboto900' : 'font-bebas';

  const additionalStyles = css`
    text-align: ${align};
    ${extraStyle}
  `;

  return (
    <StyledSubTitle
      className={`text-lg md:text-xl lg:text-2xl ${font} ${className}`}
      css={additionalStyles}>
      {children}
    </StyledSubTitle>
  );
};

export default SubTitle;
