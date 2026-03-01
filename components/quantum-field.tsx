"use client"

import { useEffect, useRef } from "react"

export function QuantumField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    /* ── light-wash blobs (slow-moving radial highlights) ── */
    const washes = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00015,
      radius: 0.25 + Math.random() * 0.2,
      hue: i % 2 === 0 ? 186 : 225,        // cyan 186 | royal-blue 225
      saturation: 80 + Math.random() * 20,
      phase: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      time += 0.002

      /* ── 1. deep charcoal fill ── */
      ctx.fillStyle = "#141418"
      ctx.fillRect(0, 0, w, h)

      /* ── 2. mesh-gradient light washes ── */
      for (const wash of washes) {
        wash.x += wash.vx
        wash.y += wash.vy
        // soft bounce
        if (wash.x < -0.1 || wash.x > 1.1) wash.vx *= -1
        if (wash.y < -0.1 || wash.y > 1.1) wash.vy *= -1

        const pulse = 0.5 + 0.5 * Math.sin(time * 1.5 + wash.phase)
        const r = wash.radius * Math.max(w, h)
        const grad = ctx.createRadialGradient(
          wash.x * w, wash.y * h, 0,
          wash.x * w, wash.y * h, r
        )
        const alpha = 0.07 + pulse * 0.05
        grad.addColorStop(0, `hsla(${wash.hue}, ${wash.saturation}%, 55%, ${alpha})`)
        grad.addColorStop(0.5, `hsla(${wash.hue}, ${wash.saturation}%, 35%, ${alpha * 0.4})`)
        grad.addColorStop(1, "transparent")
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, w, h)
      }

      /* ── 3. animated grid lines ── */
      const gridSpacing = 64
      const cols = Math.ceil(w / gridSpacing) + 1
      const rows = Math.ceil(h / gridSpacing) + 1

      // vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSpacing
        // each line gets a subtle travelling brightness
        const wave = 0.5 + 0.5 * Math.sin(time * 0.8 + i * 0.3)
        const lineAlpha = 0.025 + wave * 0.02
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.strokeStyle = `rgba(0, 242, 255, ${lineAlpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // horizontal lines
      for (let j = 0; j < rows; j++) {
        const y = j * gridSpacing
        const wave = 0.5 + 0.5 * Math.sin(time * 0.8 + j * 0.3 + 1.5)
        const lineAlpha = 0.025 + wave * 0.02
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.strokeStyle = `rgba(0, 242, 255, ${lineAlpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      /* ── 4. travelling light-wash streaks across grid ── */
      // Two horizontal "wash" beams that sweep slowly
      for (let b = 0; b < 2; b++) {
        const beamY = ((time * 40 + b * h * 0.5) % (h + 200)) - 100
        const beamGrad = ctx.createLinearGradient(0, beamY - 60, 0, beamY + 60)
        beamGrad.addColorStop(0, "transparent")
        beamGrad.addColorStop(0.5, `rgba(0, 242, 255, 0.025)`)
        beamGrad.addColorStop(1, "transparent")
        ctx.fillStyle = beamGrad
        ctx.fillRect(0, beamY - 60, w, 120)
      }

      // One vertical sweep
      const vBeamX = ((time * 30 + 300) % (w + 200)) - 100
      const vGrad = ctx.createLinearGradient(vBeamX - 80, 0, vBeamX + 80, 0)
      vGrad.addColorStop(0, "transparent")
      vGrad.addColorStop(0.5, `rgba(30, 64, 175, 0.02)`)
      vGrad.addColorStop(1, "transparent")
      ctx.fillStyle = vGrad
      ctx.fillRect(vBeamX - 80, 0, 160, h)

      /* ── 5. grid intersection dots (subtle) ── */
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSpacing
          const y = j * gridSpacing
          const dist = Math.hypot(x - w / 2, y - h / 2) / Math.max(w, h)
          const dot = 0.5 + 0.5 * Math.sin(time * 1.2 + i * 0.5 + j * 0.5)
          const dotAlpha = (1 - dist) * 0.06 * dot
          if (dotAlpha > 0.01) {
            ctx.beginPath()
            ctx.arc(x, y, 1.2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 242, 255, ${dotAlpha})`
            ctx.fill()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
