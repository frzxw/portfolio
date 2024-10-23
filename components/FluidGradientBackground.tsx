import { useEffect, useRef } from 'react'

function FluidGradientBackground() {
    useEffect(() => {
      const canvas = document.getElementById('gradient-canvas') as HTMLCanvasElement
      const ctx = canvas.getContext('2d')!
  
      let time = 0
      const color1 = { r: 10, g: 25, b: 50 }  // Dark Blue
      const color2 = { r: 60, g: 20, b: 80 }  // Dark Purple
  
      function animate() {
        time += 0.002
        const { width, height } = canvas
  
        const gradient = ctx.createLinearGradient(0, 0, width, height)
        const color = {
          r: Math.sin(time) * (color2.r - color1.r) / 2 + (color2.r + color1.r) / 2,
          g: Math.sin(time) * (color2.g - color1.g) / 2 + (color2.g + color1.g) / 2,
          b: Math.sin(time) * (color2.b - color1.b) / 2 + (color2.b + color1.b) / 2
        }
  
        gradient.addColorStop(0, `rgb(${color1.r}, ${color1.g}, ${color1.b})`)
        gradient.addColorStop(1, `rgb(${color.r}, ${color.g}, ${color.b})`)
  
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
  
        requestAnimationFrame(animate)
      }
  
      animate()
  
      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
  
      window.addEventListener('resize', resizeCanvas)
      resizeCanvas()
  
      return () => window.removeEventListener('resize', resizeCanvas)
    }, [])
  
    return <canvas id="gradient-canvas" className="fixed inset-0 z-0" />
  }
  

export default FluidGradientBackground;
