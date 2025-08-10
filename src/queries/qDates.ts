import { useQuery } from 'react-query'
import { type DateData, dates } from './mocks'

const endpoint = 'dates'

export const queryKeyDates = (chapter?: string) => [endpoint, chapter]

const fetchChapters = async (chapter?: string): Promise<DateData[] | undefined> => {
  const data = await new Promise<DateData[] | undefined>(resolve => resolve(
    dates?.find(d => d.chapter === chapter)?.dates || []
  ))

  return data
}

export const useQueryDates = (chapter?: string) => useQuery({
  queryKey: queryKeyDates(chapter),
  queryFn: () => fetchChapters(chapter),
  enabled: !!chapter
})
