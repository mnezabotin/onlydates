import React, { useRef, useState } from 'react'
// @ts-ignore
import { gsap } from 'gsap'
// @ts-ignore
import { useGSAP } from '@gsap/react'

import { Layout, DividerCenter, CircleBox, Circle, Dot } from './styles'

type Props = {
  activeInd: number
  chapters?: string[]
}

export const CircleChapter = ({ activeInd, chapters = [] }: Props) => {
  const dotsScope = useRef()
  const [prevInd, setPrevInd] = useState(0)

  useGSAP(() => {
    const dots = gsap.utils.toArray('.dot')
    const stepAngl = 360 / chapters.length
    for (let i = 0; i < chapters.length; i++) {
      const dot = dots[i]
      const rotationStart = -stepAngl * prevInd - 90 + stepAngl / 2 + i * stepAngl
      const rotationEnd = -stepAngl * activeInd - 90 + stepAngl / 2 + i * stepAngl
      gsap.set(dot, { translateX: '265px' })
      gsap.fromTo(
        dot,
        {
          xPercent: -50,
          yPercent: -50,
          rotation: rotationStart,
        },
        {
          xPercent: -50,
          yPercent: -50,
          rotation: rotationEnd,
        }
      ) 
    }
    setPrevInd(activeInd)
  }, {
    scope: dotsScope.current,
    dependencies: [
      dotsScope,
      chapters,
      activeInd
    ]
  })

  return (
    <Layout>
      <DividerCenter />
      <CircleBox>
        <Circle />
        <div ref={dotsScope.current}>
          {chapters.map((c) => (
            <Dot
              key={c}
              className='dot'
            />
          ))}
        </div>
      </CircleBox>
    </Layout>
  )
}
