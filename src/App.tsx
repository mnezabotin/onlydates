import React from 'react'
import './index.scss'

import { Layout } from './components/Layout'
import { DatesWidget } from './widgets/DatesWidget/index'

// @ts-ignore
import { gsap } from 'gsap'
// @ts-ignore
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export const App = () => (
  <Layout>
    <DatesWidget />
  </Layout>
)
