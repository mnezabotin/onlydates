import React from 'react'
import styled from 'styled-components'
import { colors, media } from '../styles/theme'
import { Box } from '../styles/Box'
import { ArrowIconPrev, ArrowIconNext } from '../components/ArrowIcon'

const NavBox = styled.div`
  @media (min-width: ${media.laptop}) {
    padding: 0 0 0 80px;
    margin-top: -60px;
  }
`

const NavButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: ${media.tablet}) {
    gap: 20px;
  }
`

const NavButton = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid #42567a80;
  border-radius: 50%;
  background: transparent;
  color: ${colors.blackBlue};
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 100ms;

  &:hover {
    background: #f1f1f1;
  }
  &:active {
    background: transparent;
  }

  @media (min-width: ${media.tablet}) {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }
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
    <NavBox>
      <Box
        marginBottom='20px'
        fontSize='14px'
        color={colors.blackBlue}
      >
        0{current + 1}/0{size}
      </Box>
      <NavButtonBox>
        <NavButton onClick={onPrev}><ArrowIconPrev /></NavButton>
        <NavButton onClick={onNext}><ArrowIconNext /></NavButton>
      </NavButtonBox>
    </NavBox>
  )
}
