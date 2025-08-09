import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

const Box = styled.div`
  display: grid;
  gap: 15px;
  user-select: none;
`

const Date = styled.div`
  color: ${colors.lightBlue};
  font-family: 'Bebas Neue';
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
`

const Desc = styled.div`
  color: ${colors.blackBlue};
  font-family: "PT Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px
`

type Props = {
  date: string | number
  desc: string
}

export const DateDesc = ({ date, desc }: Props) => (
  <Box>
    <Date>{date}</Date>
    <Desc>{desc}</Desc>
  </Box>
)
