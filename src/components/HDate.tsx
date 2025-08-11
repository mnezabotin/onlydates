import styled, { css } from 'styled-components'
import { colors, media } from '../styles/theme'

type Props = {
  secondary?: boolean
}

export const HDate = styled.div<Props>`
  text-align: center;
  font-family: 'PT Sans';
  
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;

  font-size: 56px;

  ${(props) => css`
    color: ${props.secondary ? colors.lightPink : colors.lightBlue};
  `}

  @media (min-width: ${media.tablet}) {
    font-size: 96px;
  }

  @media (min-width: ${media.laptop}) {
    font-size: 200px;
    ${(props) => css`
      color: ${props.secondary ? colors.secondary : colors.primary};
    `}
  }
`
