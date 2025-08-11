import React, { useMemo, useState } from 'react'
import { SliderBox, DatesWidgetLayout, DividerCenter, DividerLeft, DividerRight, CircleChapterBox, HDatesBox, HeadingBox, DividerHCenter, NavSliderBox } from './styles'
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
      <HeadingBox>
        <Heading>
          Исторические<br />даты
        </Heading>
      </HeadingBox>
      <CircleChapterBox>
        <DividerHCenter />
        <HDatesBox>
          <HDates first={startDate} last={endDate} />
        </HDatesBox>
        <CircleChapter
          activeInd={chapterInd}
          chapters={chapters}
          onChange={setChapterInd}
        />
      </CircleChapterBox>
      <NavSliderBox>
        <PrevNextButtons
          current={chapterInd}
          size={chapters?.length || 0}
          onChange={setChapterInd}
        />
        <Box width='100%'>
          <SliderBox>
            <DatesSlider data={dates} />
          </SliderBox>
        </Box>
      </NavSliderBox>
    </DatesWidgetLayout>
  )
}
