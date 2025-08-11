import styled, {css } from 'styled-components'

type Props = {
  position?:  string
  marginTop?: string | number
  marginBottom?: string | number
  fontSize?: string | number
  color?: string
  padding?: string
  width?: string | number
}

export const Box = styled.div<Props>`
  ${(props) => css`
    position: ${props.position};
    width: ${props.width};
    color: ${props.color};
    padding: ${props.padding};
    font-size: ${props.fontSize};
    margin-top: ${props.marginTop};
    margin-bottom: ${props.marginBottom};
  `}
`
