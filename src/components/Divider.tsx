import styled, { css } from 'styled-components'
import { colors } from '../styles/colors'

type Props = {
  vertical?: boolean
}

export const Divider = styled.div<Props>`
  ${(props) => css`
    width: ${props.vertical ? '1px' : '100%'};
    height: ${props.vertical ? '100%' : '1px'};
    color: ${colors.blackBlue};
    opacity: 0.1;
  `}
`
