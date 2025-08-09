import styled from 'styled-components'
import { Divider } from '../../components/Divider'
import { HDates } from '../../containers/HDates'

export const DatesWidgetLayout = styled.div`
  position: relative;
  padding: 170px 0 104px;
`

export const DividerLeft = styled(Divider)`
  position: absolute;
  left: 0;
  top: 0;
`

export const DividerRight = styled(Divider)`
  position: absolute;
  right: 0;
  top: 0;
`

export const DividerCenter = styled(Divider)`
  position: absolute;
  left: calc(50% - 0.5px);
  top: 0;
`

export const CircleChapterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SliderBox = styled.div`
  padding: 0 80px;
`
