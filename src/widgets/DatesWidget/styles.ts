import styled from 'styled-components'
import { Divider } from '../../components/Divider'
import { media } from '../../styles/theme'

export const DatesWidgetLayout = styled.div`
  position: relative;

  padding: 80px 0;

  @media (min-width: ${media.tablet}) {
    padding: 170px 0 104px;
  }
`

export const DividerLeft = styled(Divider)`
  position: absolute;
  left: 0;
  top: 0;
  display: block;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const DividerRight = styled(Divider)`
  position: absolute;
  right: 0;
  top: 0;
  display: block;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const DividerCenter = styled(Divider)`
  position: absolute;
  left: calc(50% - 0.5px);
  top: 0;
  display: block;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const DividerHCenter = styled(Divider)`
  position: absolute;
  top: calc(50% - 0.5px);
  left: 0;
  z-index: 90;
  display: block;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const CircleChapterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SliderBox = styled.div`
  @media (min-width: ${media.laptop}) {
    padding: 0 80px;
  }
`

export const HDatesBox = styled.div`
  position: relative;
  width: 100%;
  z-index: 99;

  @media (min-width: ${media.tablet}) {
    position: absolute;
  }
`

export const HeadingBox = styled.div`
  margin-bottom: 0;

  @media (min-width: ${media.tablet}) {
    margin-bottom: 45px;
  }
`

export const NavSliderBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  align-items: start;
  gap: 60px;

  @media (min-width: ${media.tablet}) {
    flex-direction: column;
  }
`
