import React from 'react'
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Box } from '../styles/Box';
import { Flex } from '../styles/Flex';

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #42567a80;
  border-radius: 50%;
  background: transparent;
  color: ${colors.blackBlue};
  font-weight: 700;
  cursor: pointer;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`

type Props = {
  current: number
  size: number,
  onChange: (value: number) => void
}

export const PrevNextButtons = ({ current, size, onChange }: Props) => {
  const onPrev = () => {
    const result = current - 1
    onChange(result < 0 ? size - 1 : result)
  }

  const onNext = () => {
    const result = current + 1
    onChange(result >= size ? 0 : result)
  }

  return (
    <Box padding='0 0 60px 80px'>
      <Box
        marginBottom='20px'
        fontSize='14px'
        color={colors.blackBlue}
      >
        0{current + 1}/0{size}
      </Box>
      <Flex alignItems='center' gap='20px'>
        <NavButton onClick={onPrev}>&#8249;</NavButton>
        <NavButton onClick={onNext}>&#8250;</NavButton>
      </Flex>
    </Box>
  )
}
