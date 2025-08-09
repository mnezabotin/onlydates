import styled, {css } from 'styled-components'

type Props = {
  position?:  string
  marginDown?: string | number
}

export const Box = styled.div<Props>`
  ${(props) => css`
    position: ${props.position};
    margin-down: ${props.marginDown}
  `}
`
