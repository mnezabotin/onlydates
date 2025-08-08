import styled, {css } from 'styled-components'

type Props = {
  alignItems?: string
  justifyContent?: string
  columns?: string
  gap?: string | number
}

export const Grid = styled.div<Props>`
  display: grid;

  ${(props) => css`
    grid-template-columns: ${props.columns};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    gap: ${props.gap};
  `}
`
