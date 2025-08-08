import styled, {css } from 'styled-components'

type Props = {
  alignItems?: string
  justifyContent?: string
  gap?: string | number
}

export const Flex = styled.div<Props>`
  display: flex;

  ${(props) => css`
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    gap: ${props.gap};
  `}
`
