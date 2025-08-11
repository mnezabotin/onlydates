import React from 'react'
import './index.scss'

import { Layout } from './components/Layout'
import { DatesWidget } from './widgets/DatesWidget/index'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { QueryClientProvider} from 'react-query'
import queryClient from './queries/client'

gsap.registerPlugin(useGSAP)

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <DatesWidget />
      <DatesWidget />
    </Layout>
  </QueryClientProvider>
)
