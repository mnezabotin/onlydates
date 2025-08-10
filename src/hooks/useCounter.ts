import { useEffect, useState } from 'react'

export const useCounter = (endValue = 2000, duration = 1000) => {
  const [count, setCount] = useState(0)
  const [prev, setPrev] = useState(2000)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration)

      if (progress < 1) {
        setCount(Math.floor(progress * (endValue - prev) + prev))
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        setPrev(endValue)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [endValue, duration])

  return count
}