import { colors } from '../styles/colors'
import styled from 'styled-components'

export const Heading = styled.div`
  color: ${colors.blackBlue};
  font-family: 'PT Sans';
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  display: grid;
  gap: 78px;
  grid-template-columns: 5px 1fr;

  &:before {
    content: '';
    display: block;
    width: 5px;
    height: 100%;
    background: linear-gradient(to top, ${colors.secondary}, ${colors.primary});
  }
`
