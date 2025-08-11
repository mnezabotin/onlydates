import React, { useRef, useState, useMemo } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Layout, CircleBox, Circle, Dot } from './styles'

type Props = {
  activeInd: number
  chapters?: string[]
  onChange: (value: number) => void
}

export const CircleChapter = ({ activeInd, chapters = [], onChange }: Props) => {
  const dotsScope = useRef()
  const [prevInd, setPrevInd] = useState(0)

  const stepAngl = useMemo(() => 360 / chapters.length, [chapters])

  const dots = useMemo(() => chapters.map((c, i) => ({
    title: c,
    rotate: -(-stepAngl * activeInd - 90 + stepAngl / 2 + i * stepAngl)
  })), [chapters, stepAngl, activeInd])

  useGSAP(() => {
    const dots = gsap.utils.toArray('.dot')
    const stepAngl = 360 / chapters.length
    for (let i = 0; i < chapters.length; i++) {
      const dot = dots[i]
      const rotationStart = -stepAngl * prevInd - 90 + stepAngl / 2 + i * stepAngl
      const rotationEnd = -stepAngl * activeInd - 90 + stepAngl / 2 + i * stepAngl
      gsap.set(dot as HTMLElement, { translateX: '265px' })
      gsap.fromTo(
        dot as HTMLElement,
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
      stepAngl,
      activeInd
    ]
  })

  return (
    <Layout>
      <CircleBox>
        <Circle />
        <div ref={dotsScope.current}>
          {dots.map(({ title, rotate }, i) => (
            <Dot
              key={title}
              className='dot'
              onClick={() => onChange(i)}
            >
              <div
                className={i === activeInd ? 'active' : ''}
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                {i + 1}
                <span>{title}</span>
              </div>
            </Dot>
          ))}
        </div>
      </CircleBox>
    </Layout>
  )
}
