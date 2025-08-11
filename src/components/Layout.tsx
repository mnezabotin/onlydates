import styled from 'styled-components'
import { media } from '../styles/theme'

export const Layout = styled.div`
   padding: 0 20px;

   @media (min-width: ${media.laptopL}) {
     padding: 0 160px 0 320px;
   }
`
