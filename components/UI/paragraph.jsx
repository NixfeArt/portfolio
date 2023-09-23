'use client'
import { StyledParagraph } from '@/styles/styled';
import React from 'react';
import { css } from 'styled-components';

const Paragraph = ({
  align='center',
  children,
  extraStyle,
  className,
}) => {

  const additionalStyles = css`
    text-align: ${align};
    ${extraStyle}
  `;

  return (
    <StyledParagraph
      className={`text-base md:text-md mb-5 mt-3 ${className} font-roboto400`}
      css={additionalStyles}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
