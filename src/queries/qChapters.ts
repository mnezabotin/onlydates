import { useQuery } from 'react-query'
import { chapters } from './mocks'

type Data = string[]

const endpoint = 'chapters'

export const queryKeyChapters = [endpoint]

const fetchChapters = async (): Promise<Data> => {
  const data = await new Promise<Data>(resolve => resolve(chapters))
  return data
}

export const useQueryChapters = () => useQuery({
  queryKey: queryKeyChapters,
  queryFn: () => fetchChapters()
})
