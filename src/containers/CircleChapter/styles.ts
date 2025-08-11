import styled from 'styled-components'
import { colors } from '../../styles/theme'
import { Divider } from '../../components/Divider'

export const Layout = styled.div`
  position: relative;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (min-width: 768px) {
    display: grid;
  }
`

export const CircleBox = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
`

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${colors.blackBlue};
  opacity: 0.2;
`

export const Dot = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: -237px center;
  cursor: pointer;

  & > div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blackBlue};
    border-color: transparent;
    transition: all 100ms;
    overflow: hidden;
    position: relative;
  }

  & > div.active,
  &:hover > div {
    width: 56px;
    height: 56px;
    background-color: ${colors.background};
    border-color: ${colors.dotBorder};
  }

  & > div.active {
    overflow: visible;
  }

  & > div > span {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    left: 100%;
    margin-left: 20px;
    color: ${colors.blackBlue};
    transition: opacity 1s;
    opacity: 0;
  }

  & > div.active > span {
    transition-delay: 400ms;
    opacity: 1;
  }
`
