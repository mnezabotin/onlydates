import React, { useEffect, useRef } from 'react'
import { HDate } from '../components/HDate'
import { Flex } from '../styles/Flex'
import { useCounter } from '../hooks/useCounter'

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
    <Flex
      justifyContent='center'
      gap='96px'
    >
      <HDate>{firstDate}</HDate>
      <HDate secondary={true}>{lastDate}</HDate>
    </Flex>
  )
}
