import { colors, media } from '../styles/theme'
import styled from 'styled-components'

export const Heading = styled.div`
  color: ${colors.blackBlue};
  font-family: 'PT Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  display: grid;
  gap: 78px;
  grid-template-columns: 5px 1fr;


  @media (min-width: ${media.tablet}) {
    font-size: 48px;
  }

  @media (min-width: ${media.laptop}) {
    font-size: 56px;
    &:before {
      content: '';
      display: block;
      width: 5px;
      height: 100%;
      background: linear-gradient(to top, ${colors.secondary}, ${colors.primary});
    }
  }
`
