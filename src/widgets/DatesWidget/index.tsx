import React, { useMemo, useState } from 'react'
import { SliderBox, DatesWidgetLayout, DividerCenter, DividerLeft, DividerRight, CircleChapterBox } from './styles'
import { Heading } from '../../components/Heading'
import { DatesSlider } from '../../containers/DatesSlider'
import { CircleChapter } from '../../containers/CircleChapter/index'
import { Box } from '../../styles/Box'
import { HDates } from '../../containers/HDates'
import { PrevNextButtons } from '../../containers/PrevNextButtons'
import { useQueryChapters } from '../../queries/qChapters'
import { useQueryDates } from '../../queries/qDates'


export const DatesWidget = () => {
  const [chapterInd, setChapterInd] = useState(0)
  const { data: chapters } = useQueryChapters()
  const chapter = useMemo(() => chapters ? chapters[chapterInd] : undefined, [chapterInd, chapters])
  const { data: dates } = useQueryDates(chapter)

  const startDate = useMemo(() => {
    if (!dates) {
      return 2000
    }

    return Math.min(...dates.map(d => d.date))
  }, [dates])

  const endDate = useMemo(() => {
    if (!dates) {
      return 2000
    }

    return Math.max(...dates.map(d => d.date))
  }, [dates])

  return (
    <DatesWidgetLayout>
      <DividerLeft vertical />
      <DividerCenter vertical />
      <DividerRight vertical />
      <Box marginBottom='-45px'>
        <Heading>
          Исторические<br />даты
        </Heading>
      </Box>
      <CircleChapterBox>
        <Box position='absolute'>
          <HDates first={startDate} last={endDate} />
        </Box>
        <CircleChapter
          activeInd={chapterInd}
          chapters={chapters}
          onChange={setChapterInd}
        />
      </CircleChapterBox>
      <PrevNextButtons
        current={chapterInd}
        size={chapters?.length || 0}
        onChange={setChapterInd}
      />
      <SliderBox>
        <DatesSlider data={dates} />
      </SliderBox>
    </DatesWidgetLayout>
  )
}
