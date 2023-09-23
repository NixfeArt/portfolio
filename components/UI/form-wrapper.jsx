import { StyledFormWrapper } from '@/styles/styled';
import { css } from 'styled-components';

const FormWrapper = ({
  children,
  onSubmit,
  noValidate=false,
  className,
  extraStyle
}) => {

  const additionalStyles = css`
    ${extraStyle}
  ` 

  return (
    <StyledFormWrapper
      className={className}
      noValidate={noValidate}
      onSubmit={onSubmit}
      css={additionalStyles}>
      {children}
    </StyledFormWrapper>
  )
}

export default FormWrapper