import styled, { css } from 'styled-components'
import { colors } from '../styles/colors'

type Props = {
  vertical?: boolean
}

export const Divider = styled.div<Props>`
  color: ${colors.primary};
  text-align: center;
  font-family: 'PT Sans';
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;

  ${(props) => css`
    color: ${props.vertical ? colors.secondary : undefined};
  `}
`
