import React from 'react'
import { HDate } from '../components/HDate'
import { useCounter } from '../hooks/useCounter'
import styled from 'styled-components'
import { media } from '../styles/theme'

const HDBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${media.mobile}) {
    justify-content: space-around;
  }

  @media (min-width: ${media.tablet}) {
    justify-content: center;
    gap: 96px;
  }
`

type Props = {
  first: number
  last: number
}

export const HDates = ({
  first,
  last,
}: Props) => {
  const firstDate = useCounter(first)
  const lastDate = useCounter(last)

  return (
    <HDBox>
      <HDate>{firstDate}</HDate>
      <HDate secondary={true}>{lastDate}</HDate>
    </HDBox>
  )
}
