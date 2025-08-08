import React from 'react'
import { DatesWidgetLayout } from './styles'
import { Heading } from '../../components/Heading'
import { HDates } from '../../containers/HDates'

export const DatesWidget = () => {
  return (
    <DatesWidgetLayout>
      <Heading>
        Исторические<br />даты
      </Heading>
      <HDates first={2015} last={2022} />
    </DatesWidgetLayout>
  )
}
