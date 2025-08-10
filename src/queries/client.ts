import { QueryClient } from "react-query";

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      retryOnMount: false
    },
  },
})
