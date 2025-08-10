import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { Divider } from '../../components/Divider'

export const Layout = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const DividerCenter = styled(Divider)`
  position: absolute;
  top: calc(50% - 0.5px);
  left: 0;
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
  width: 6px;
  height: 6px;
  background-color: ${colors.blackBlue};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid;
  border-color: transparent;
  transform-origin: -265px center;
`
