// components/StaticNoise.tsx
'use client'

import { useEffect, useRef } from 'react'

export default function StaticNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight

    function drawNoise() {
      if (!ctx) return
      const imageData = ctx.createImageData(width, height)
      for (let i = 0; i < imageData.data.length; i += 4) {
        const val = Math.random() * 255
        imageData.data[i] = val 
        imageData.data[i + 1] = val 
        imageData.data[i + 2] = val 
        imageData.data[i + 3] = 80
      }
      ctx.putImageData(imageData, 0, 0)
    }

    let animationFrame: number
    const loop = () => {
      drawNoise()
      animationFrame = requestAnimationFrame(loop)
    }

    loop()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-screen h-screen z-0 pointer-events-none mix-blend-overlay"
    />
  )
}