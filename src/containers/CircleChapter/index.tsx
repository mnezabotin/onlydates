import React, { useMemo } from 'react'
import { Layout, DividerCenter, Box, Circle, Dot } from './styles'

type DotProps = {
  rotate: number
  title: string
}

type Props = {
  chapters?: string[]
}

export const CircleChapter = ({ chapters = [] }: Props) => {
  const dots = useMemo((): DotProps[] => {
    const stepAngl = 360 / chapters.length
    return chapters.map((c, i) => ({
      title: c,
      rotate: -90 + stepAngl / 2 + i * stepAngl,
    }))
  }, [chapters])

  console.log(dots)

  return (
    <Layout>
      <DividerCenter />
      <Box>
        <Circle />
        {dots.map(({title, rotate}) => (
          <Dot
            key={title}
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg) translateX(265px)`,
            }}
          />
        ))}
        
      </Box>
    </Layout>
  )
}
