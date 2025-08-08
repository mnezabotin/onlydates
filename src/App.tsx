import React from 'react'
import './index.scss'

import { Layout } from "./components/Layout"
import { DatesWidget } from './widgets/DatesWidget/index'

export const App = () => (
  <Layout>
    <DatesWidget />
  </Layout>
)
