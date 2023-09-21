import { StyledTitle } from "@/styles/styled"
import { css } from 'styled-components';

const Title = ({
  children,
  isRoboto = true,
  extraStyle,
  className,
  align='center'
}) => {

  const font = isRoboto ? 'font-roboto900' : 'font-bebas'

  const additionalStyles = css`
    text-align: ${align};
    ${extraStyle}
  `;

  return (
    <StyledTitle
      className={`text-3xl md:text-4xl xl:text-5xl ${font} ${className}`}
      css={additionalStyles}>
      {children}
    </StyledTitle>
  )
}

export default Title