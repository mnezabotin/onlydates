import React from 'react'
import { SliderBox, DatesWidgetLayout, DividerCenter, DividerLeft, DividerRight, CircleChapterBox } from './styles'
import { Heading } from '../../components/Heading'
import { DatesSlider } from '../../containers/DatesSlider'
import { CircleChapter } from '../../containers/CircleChapter/index'
import { Box } from '../../styles/Box'
import { HDates } from '../../containers/HDates'

const sliders = [
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
  { date: '2015', desc: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
]

const chapters = ['Литература', 'Кино', 'Наука', 'Космос', 'Игры', 'События']

export const DatesWidget = () => {
  return (
    <DatesWidgetLayout>
      <DividerLeft vertical />
      <DividerCenter vertical />
      <DividerRight vertical />
      <Box marginDown='-45px'>
        <Heading>
          Исторические<br />даты
        </Heading>
      </Box>
      <CircleChapterBox>
        <Box position='absolute'>
          <HDates first={2015} last={2022} />
        </Box>
        <CircleChapter chapters={chapters} />
      </CircleChapterBox>
      <SliderBox>
        <DatesSlider data={sliders} />
      </SliderBox>
    </DatesWidgetLayout>
  )
}
