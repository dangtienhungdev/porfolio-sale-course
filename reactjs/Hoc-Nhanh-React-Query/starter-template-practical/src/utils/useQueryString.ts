import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObj = Object.fromEntries([...searchParams])
  return searchParamsObj
}
