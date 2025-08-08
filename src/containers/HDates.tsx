import React from 'react'
import { HDate } from '../components/HDate'
import { Flex } from '../styles/Flex'

type Props = {
  first: number
  last: number
}

export const HDates = ({
  first,
  last,
}: Props) => {
  return (
    <Flex
      justifyContent='center'
      gap='96px'
    >
      <HDate>{first}</HDate>
      <HDate secondary>{last}</HDate>
    </Flex>
  )
}
