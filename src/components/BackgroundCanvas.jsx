import React, { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = window.innerWidth
    let height = window.innerHeight

    const updateDimensions = () => {
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }
    updateDimensions()

    const handleResize = () => {
      updateDimensions()
      initStars()
    }
    window.addEventListener('resize', handleResize)

    // Smooth scroll interpolation
    let scrollY = window.scrollY
    let targetScrollY = window.scrollY

    const handleScroll = () => {
      targetScrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })



    const mouse = {
      x: null,
      y: null,
      targetX: null,
      targetY: null,
    }

    const ripples = []

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.targetX = null
      mouse.targetY = null
    }
    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: Math.min(280, width * 0.4),
        opacity: 0.65,
      })
    }

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0]
        mouse.targetX = touch.clientX
        mouse.targetY = touch.clientY
        ripples.push({
          x: touch.clientX,
          y: touch.clientY,
          radius: 2,
          maxRadius: Math.min(200, width * 0.35),
          opacity: 0.65,
        })
      }
    }
    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0]
        mouse.targetX = touch.clientX
        mouse.targetY = touch.clientY
      }
    }
    const handleTouchEnd = () => {
      mouse.targetX = null
      mouse.targetY = null
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    window.addEventListener('click', handleClick, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    // =========================================================================
    // 1. DEEP STARFIELD (Astrophotography Parallax Layers)
    // =========================================================================
    let stars = []
    const initStars = () => {
      stars = []
      const count = Math.min(Math.floor((width * height) / 3600), 360)
      for (let i = 0; i < count; i++) {
        const isBright = Math.random() < 0.08
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 3,
          radius: isBright ? Math.random() * 1.5 + 1.2 : Math.random() * 0.7 + 0.3,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          twinkleOffset: Math.random() * Math.PI * 2,
          speedFactor: Math.random() * 0.25 + 0.05,
          isBright,
          flareLen: Math.random() * 8 + 6,
        })
      }
    }
    initStars()

    // =========================================================================
    // 2. EYE-CATCHING ORBITING TECH STACK & TOOLS (Surrounding the Central Plasma Bloom)
    // =========================================================================
    const toolOrbits = [
      {
        id: 'python',
        name: 'PYTHON',
        distance: 105,
        mobileDist: 48,
        badgeRadius: 16,
        speedMultiplier: 2.4,
        baseAngle: 0.3,
        brandColor: '#0284c7', // Vivid Sky Blue
        accentColor: '#facc15', // Gold
        tag: 'PYTHON // AI/ML, SCIKIT-LEARN & NUMPY',
        renderIcon: (c) => {
          c.fillStyle = '#38bdf8'
          c.beginPath()
          c.arc(-2.5, -3, 4, 0, Math.PI * 2)
          c.fill()
          c.fillRect(-2.5, -4, 5.5, 3)
          c.fillStyle = '#0a0a14'
          c.beginPath()
          c.arc(-1.5, -3.8, 1, 0, Math.PI * 2)
          c.fill()

          c.fillStyle = '#facc15'
          c.beginPath()
          c.arc(2.5, 3, 4, 0, Math.PI * 2)
          c.fill()
          c.fillRect(-3, 1, 5.5, 3)
          c.fillStyle = '#0a0a14'
          c.beginPath()
          c.arc(1.5, 3.8, 1, 0, Math.PI * 2)
          c.fill()
        },
      },
      {
        id: 'powerbi',
        name: 'POWER BI',
        distance: 150,
        mobileDist: 72,
        badgeRadius: 16,
        speedMultiplier: 1.95,
        baseAngle: 1.6,
        brandColor: '#f59e0b', // Power BI Gold / Amber
        accentColor: '#fde047',
        tag: 'POWER BI // INTERACTIVE BUSINESS INTELLIGENCE & DAX',
        renderIcon: (c) => {
          c.fillStyle = '#d97706'
          c.beginPath()
          c.roundRect(-6.5, -1, 3.2, 8, 1.2)
          c.fill()

          c.fillStyle = '#f59e0b'
          c.beginPath()
          c.roundRect(-2.2, -4.5, 3.4, 11.5, 1.2)
          c.fill()

          c.fillStyle = '#fde047'
          c.beginPath()
          c.roundRect(2.4, -7.5, 3.6, 14.5, 1.2)
          c.fill()

          c.fillStyle = 'rgba(255, 255, 255, 0.65)'
          c.beginPath()
          c.ellipse(4.2, -6.5, 1.4, 0.7, 0, 0, Math.PI * 2)
          c.fill()
        },
      },
      {
        id: 'sql',
        name: 'SQL',
        distance: 200,
        mobileDist: 98,
        badgeRadius: 16,
        speedMultiplier: 1.55,
        baseAngle: 2.9,
        brandColor: '#a855f7', // Vivid Purple
        accentColor: '#c084fc',
        tag: 'SQL // SCHEMA DESIGN, QUERY TUNING & INDEXING',
        renderIcon: (c) => {
          c.strokeStyle = '#c084fc'
          c.lineWidth = 1.4
          c.fillStyle = 'rgba(168, 85, 247, 0.25)'

          c.beginPath()
          c.ellipse(0, -5.5, 6.5, 2.5, 0, 0, Math.PI * 2)
          c.fill()
          c.stroke()

          c.beginPath()
          c.ellipse(0, 0, 6.5, 2.5, 0, 0, Math.PI)
          c.stroke()

          c.beginPath()
          c.ellipse(0, 5.5, 6.5, 2.5, 0, 0, Math.PI)
          c.stroke()

          c.beginPath()
          c.moveTo(-6.5, -5.5)
          c.lineTo(-6.5, 5.5)
          c.moveTo(6.5, -5.5)
          c.lineTo(6.5, 5.5)
          c.stroke()

          c.fillStyle = '#ffffff'
          c.beginPath()
          c.arc(0, 0, 1.2, 0, Math.PI * 2)
          c.fill()
        },
      },
      {
        id: 'aiml',
        name: 'AI / ML',
        distance: 255,
        mobileDist: 124,
        badgeRadius: 17,
        speedMultiplier: 1.25,
        baseAngle: 4.2,
        brandColor: '#10b981', // Emerald Neon
        accentColor: '#6ee7b7',
        tag: 'AI/ML // NEURAL MODELS, EVALUATION & PREDICTION',
        renderIcon: (c) => {
          c.strokeStyle = 'rgba(52, 211, 153, 0.7)'
          c.lineWidth = 1.0
          c.beginPath()
          c.moveTo(-6, -4.5)
          c.lineTo(0, 0)
          c.moveTo(-6, 4.5)
          c.lineTo(0, 0)
          c.moveTo(0, 0)
          c.lineTo(6, -4.5)
          c.moveTo(0, 0)
          c.lineTo(6, 4.5)
          c.moveTo(-6, -4.5)
          c.lineTo(-6, 4.5)
          c.stroke()

          c.fillStyle = '#34d399'
          c.beginPath()
          c.arc(-6, -4.5, 2.2, 0, Math.PI * 2)
          c.arc(-6, 4.5, 2.2, 0, Math.PI * 2)
          c.arc(6, -4.5, 2.2, 0, Math.PI * 2)
          c.arc(6, 4.5, 2.2, 0, Math.PI * 2)
          c.fill()

          c.fillStyle = '#ffffff'
          c.beginPath()
          c.arc(0, 0, 3, 0, Math.PI * 2)
          c.fill()
        },
      },
      {
        id: 'java',
        name: 'JAVA',
        distance: 320,
        mobileDist: 150,
        badgeRadius: 16,
        speedMultiplier: 0.95,
        baseAngle: 0.8,
        brandColor: '#ea580c', // Fiery Java Amber
        accentColor: '#fb923c',
        tag: 'JAVA // BACKEND OOP, EXCEPTION HANDLING & JDBC',
        renderIcon: (c) => {
          c.strokeStyle = '#fb923c'
          c.lineWidth = 1.3
          c.fillStyle = 'rgba(251, 146, 60, 0.2)'

          c.beginPath()
          c.moveTo(-5.5, -1)
          c.lineTo(-4.5, 5.5)
          c.lineTo(4.5, 5.5)
          c.lineTo(5.5, -1)
          c.closePath()
          c.fill()
          c.stroke()

          c.beginPath()
          c.arc(6, 1.8, 2.2, -Math.PI * 0.4, Math.PI * 0.5)
          c.stroke()

          c.beginPath()
          c.moveTo(-6.5, 7)
          c.lineTo(6.5, 7)
          c.stroke()

          c.strokeStyle = '#fdba74'
          c.lineWidth = 1.1
          c.beginPath()
          c.moveTo(-2, -3)
          c.quadraticCurveTo(-3.5, -5, -2, -7)
          c.moveTo(2, -3)
          c.quadraticCurveTo(3.5, -5, 2, -7)
          c.stroke()
        },
      },
      {
        id: 'mysql',
        name: 'MYSQL',
        distance: 395,
        mobileDist: 174,
        badgeRadius: 16,
        speedMultiplier: 0.7,
        baseAngle: 2.2,
        brandColor: '#0284c7', // Ocean Blue
        accentColor: '#38bdf8',
        tag: 'MYSQL // HIGH-CONCURRENCY RELATIONAL STORAGE',
        renderIcon: (c) => {
          c.strokeStyle = '#38bdf8'
          c.lineWidth = 1.6
          c.beginPath()
          c.moveTo(-7, 4.5)
          c.quadraticCurveTo(-2, -7.5, 5.5, -3.5)
          c.quadraticCurveTo(2.5, 1.5, 7, 5)
          c.stroke()

          c.beginPath()
          c.moveTo(-7, 4.5)
          c.lineTo(-8.5, 2.5)
          c.moveTo(-7, 4.5)
          c.lineTo(-8.5, 6.5)
          c.stroke()

          c.fillStyle = '#ffffff'
          c.beginPath()
          c.arc(2.5, -2.5, 1.3, 0, Math.PI * 2)
          c.fill()
        },
      },
      {
        id: 'pandas',
        name: 'PANDAS',
        distance: 475,
        mobileDist: 198,
        badgeRadius: 16,
        speedMultiplier: 0.48,
        baseAngle: 3.7,
        brandColor: '#e11d48', // Crimson Rose
        accentColor: '#fb7185',
        tag: 'PANDAS // DATA EXPLORATION, CLEANING & EDA',
        renderIcon: (c) => {
          c.strokeStyle = '#fb7185'
          c.lineWidth = 1.2
          c.strokeRect(-6, -6, 12, 12)
          c.beginPath()
          c.moveTo(0, -6)
          c.lineTo(0, 6)
          c.moveTo(-6, 0)
          c.lineTo(6, 0)
          c.stroke()

          c.fillStyle = '#f43f5e'
          c.fillRect(-4.5, -4.5, 3.5, 3.5)
          c.fillRect(1, 1, 3.5, 3.5)
          c.fillStyle = 'rgba(251, 113, 133, 0.45)'
          c.fillRect(1, -4.5, 3.5, 3.5)
        },
      },
      {
        id: 'numpy',
        name: 'NUMPY',
        distance: 535,
        mobileDist: 216,
        badgeRadius: 16,
        speedMultiplier: 0.38,
        baseAngle: 1.8,
        brandColor: '#2563eb', // Official NumPy Cobalt Blue
        accentColor: '#60a5fa', // Sky Blue Accent
        tag: 'NUMPY // HIGH-PERFORMANCE N-D ARRAYS & TENSORS',
        renderIcon: (c) => {
          // 3D Isometric Tensor Block (NumPy Logo Style)
          // Top Face
          c.fillStyle = '#60a5fa'
          c.beginPath()
          c.moveTo(0, -6.5)
          c.lineTo(5.5, -3.2)
          c.lineTo(0, 0.2)
          c.lineTo(-5.5, -3.2)
          c.closePath()
          c.fill()

          // Left Face
          c.fillStyle = '#3b82f6'
          c.beginPath()
          c.moveTo(-5.5, -3.2)
          c.lineTo(0, 0.2)
          c.lineTo(0, 6.5)
          c.lineTo(-5.5, 3.2)
          c.closePath()
          c.fill()

          // Right Face
          c.fillStyle = '#1d4ed8'
          c.beginPath()
          c.moveTo(0, 0.2)
          c.lineTo(5.5, -3.2)
          c.lineTo(5.5, 3.2)
          c.lineTo(0, 6.5)
          c.closePath()
          c.fill()

          // Isometric grid lines
          c.strokeStyle = 'rgba(255, 255, 255, 0.5)'
          c.lineWidth = 0.8
          c.beginPath()
          c.moveTo(0, 0.2)
          c.lineTo(0, 6.5)
          c.moveTo(0, 0.2)
          c.lineTo(-5.5, -3.2)
          c.moveTo(0, 0.2)
          c.lineTo(5.5, -3.2)
          c.stroke()

          // Distinct Stylized White 'N'
          c.strokeStyle = '#ffffff'
          c.lineWidth = 1.4
          c.lineCap = 'round'
          c.lineJoin = 'round'
          c.beginPath()
          c.moveTo(-3, 3)
          c.lineTo(-3, -3)
          c.lineTo(3, 3)
          c.lineTo(3, -3)
          c.stroke()
        },
      },
      {
        id: 'git',
        name: 'GIT',
        distance: 595,
        mobileDist: 236,
        badgeRadius: 15,
        speedMultiplier: 0.28,
        baseAngle: 5.0,
        brandColor: '#f97316', // Git Flame Orange
        accentColor: '#fdba74',
        tag: 'GIT // DISTRIBUTED VERSION CONTROL & GITHUB',
        renderIcon: (c) => {
          c.strokeStyle = '#fdba74'
          c.lineWidth = 1.4
          c.beginPath()
          c.moveTo(-3.5, -6)
          c.lineTo(-3.5, 6)
          c.moveTo(-3.5, 1)
          c.quadraticCurveTo(2.5, 1, 3.5, -2.5)
          c.stroke()

          c.fillStyle = '#f97316'
          c.beginPath()
          c.arc(-3.5, -5, 2.2, 0, Math.PI * 2)
          c.arc(-3.5, 5, 2.2, 0, Math.PI * 2)
          c.arc(3.5, -3, 2.2, 0, Math.PI * 2)
          c.fill()
          c.fillStyle = '#ffffff'
          c.beginPath()
          c.arc(-3.5, -5, 1, 0, Math.PI * 2)
          c.arc(-3.5, 5, 1, 0, Math.PI * 2)
          c.arc(3.5, -3, 1, 0, Math.PI * 2)
          c.fill()
        },
      },
      {
        id: 'vscode',
        name: 'VS CODE',
        distance: 655,
        mobileDist: 254,
        badgeRadius: 16,
        speedMultiplier: 0.2,
        baseAngle: 4.1,
        brandColor: '#0ea5e9', // Azure Blue
        accentColor: '#38bdf8',
        tag: 'VS CODE // CLOUD & LOCAL DEVELOPMENT SUITE',
        renderIcon: (c) => {
          c.strokeStyle = '#38bdf8'
          c.lineWidth = 1.5
          c.beginPath()
          c.moveTo(-2, -5.5)
          c.lineTo(-5.5, 0)
          c.lineTo(-2, 5.5)
          c.stroke()

          c.beginPath()
          c.moveTo(2, -5.5)
          c.lineTo(5.5, 0)
          c.lineTo(2, 5.5)
          c.stroke()

          c.strokeStyle = '#facc15'
          c.beginPath()
          c.moveTo(1.5, -5.5)
          c.lineTo(-1.5, 5.5)
          c.stroke()
        },
      },
    ]

    const asteroids = []
    for (let i = 0; i < 160; i++) {
      asteroids.push({
        dist: Math.random() * 36 + 285,
        baseAngle: Math.random() * Math.PI * 2,
        speedMultiplier: Math.random() * 0.3 + 0.8,
        size: Math.random() * 1.3 + 0.4,
        alpha: Math.random() * 0.35 + 0.15,
      })
    }

    let time = 0
    let curMouseX = width * 0.5
    let curMouseY = height * 0.5

    const render = () => {
      ctx.save()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#060709'
      ctx.fillRect(0, 0, width, height)

      time += 0.007

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.08
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const scrollRatio = scrollY / docHeight

      // Smooth mouse lerp
      if (mouse.targetX !== null && mouse.targetY !== null) {
        curMouseX += (mouse.targetX - curMouseX) * 0.08
        curMouseY += (mouse.targetY - curMouseY) * 0.08
        mouse.x = curMouseX
        mouse.y = curMouseY
      } else {
        mouse.x = null
        mouse.y = null
      }

      // =======================================================================
      // A. EXACT MIDPOINT POSITION VIA #sun-anchor
      // =======================================================================
      let coreX = width * 0.5
      let coreY = height * 0.49 + scrollRatio * (height * 0.3)
      const anchor = document.getElementById('sun-anchor')
      if (anchor) {
        const rect = anchor.getBoundingClientRect()
        coreX = rect.left + rect.width * 0.5
        coreY = rect.top + rect.height * 0.5
      }
      const isMobile = width < 768
      const isSmallMobile = width < 480
      const orbitTiltY = isMobile
        ? (isSmallMobile ? 0.33 : 0.28)
        : (0.22 + Math.sin(scrollRatio * Math.PI) * 0.05)

      // =======================================================================
      // B. PARALLAX STARFIELD & SOLAR DUST PARTICLES
      // =======================================================================
      stars.forEach((star) => {
        star.twinkleOffset += star.twinkleSpeed
        const currentAlpha = Math.sin(star.twinkleOffset) * 0.35 + star.alpha
        const finalAlpha = Math.max(0.04, Math.min(0.95, currentAlpha))

        let renderY = (star.y - scrollY * star.speedFactor) % height
        if (renderY < 0) renderY += height

        if (star.isBright && finalAlpha > 0.15) {
          ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha * 0.18})`
          ctx.beginPath()
          ctx.arc(star.x, renderY, star.radius * 3.5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha})`
        ctx.beginPath()
        ctx.arc(star.x, renderY, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // =======================================================================
      // C. SUPER-BRILLIANT ATMOSPHERIC PLASMA BLOOM (Stellar Sun / Plasma Core)
      // =======================================================================
      ctx.save()
      ctx.translate(coreX, coreY)

      // Mouse detection for plasma overdrive
      let isCoreHovered = false
      if (mouse.x !== null && mouse.y !== null) {
        const distToCore = Math.hypot(coreX - mouse.x, coreY - mouse.y)
        if (distToCore < (isMobile ? 40 : 55)) {
          isCoreHovered = true
        }
      }

      const pulseSpeed = time * (isCoreHovered ? 6.5 : 3.0)
      const corePulse = Math.sin(pulseSpeed) * (isCoreHovered ? 4.5 : 2.8)

      // 1. Super-Brilliant Multi-Tiered Atmospheric Plasma Bloom (Responsively Scaled for Visibility)
      const bloomRadius = (isMobile ? 82 : 145) + corePulse * (isMobile ? 2.5 : 5)
      const bloomGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, bloomRadius)
      bloomGlow.addColorStop(0, 'rgba(255, 255, 255, 1.0)') // Pure white-hot center intensity
      bloomGlow.addColorStop(0.12, 'rgba(255, 255, 255, 0.96)')
      bloomGlow.addColorStop(0.26, isCoreHovered ? 'rgba(56, 189, 248, 0.98)' : 'rgba(56, 189, 248, 0.88)') // Vivid electric cyan plasma (#38bdf8)
      bloomGlow.addColorStop(0.52, 'rgba(14, 165, 233, 0.44)')
      bloomGlow.addColorStop(0.78, 'rgba(2, 132, 199, 0.16)')
      bloomGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = bloomGlow
      ctx.beginPath()
      ctx.arc(0, 0, bloomRadius, 0, Math.PI * 2)
      ctx.fill()

      // 2. High-Intensity Secondary Core Halo (Responsively Scaled)
      const haloRadius = (isMobile ? 36 : 55) + corePulse * (isMobile ? 1.2 : 2.2)
      const innerCoreHalo = ctx.createRadialGradient(0, 0, 0, 0, 0, haloRadius)
      innerCoreHalo.addColorStop(0, 'rgba(255, 255, 255, 1.0)')
      innerCoreHalo.addColorStop(0.28, 'rgba(240, 249, 255, 0.98)')
      innerCoreHalo.addColorStop(0.52, isCoreHovered ? 'rgba(56, 189, 248, 0.95)' : 'rgba(56, 189, 248, 0.84)')
      innerCoreHalo.addColorStop(0.80, 'rgba(14, 165, 233, 0.42)')
      innerCoreHalo.addColorStop(1, 'rgba(2, 132, 199, 0)')

      ctx.fillStyle = innerCoreHalo
      ctx.beginPath()
      ctx.arc(0, 0, haloRadius, 0, Math.PI * 2)
      ctx.fill()

      // 3. Dense White-Hot Singularity Nucleus (Responsively Scaled)
      const nucleusRadius = (isMobile ? 16 : 24) + corePulse * (isMobile ? 0.6 : 1.2)
      const nucleusGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, nucleusRadius)
      nucleusGlow.addColorStop(0, 'rgba(255, 255, 255, 1.0)')
      nucleusGlow.addColorStop(0.52, 'rgba(255, 255, 255, 0.98)')
      nucleusGlow.addColorStop(0.82, '#cffafe')
      nucleusGlow.addColorStop(1, 'rgba(56, 189, 248, 0.88)')

      ctx.fillStyle = nucleusGlow
      ctx.beginPath()
      ctx.arc(0, 0, nucleusRadius, 0, Math.PI * 2)
      ctx.fill()

      // 4. Ethereal Rotating Atmospheric Plasma Corona Filaments
      ctx.save()
      const coronaSpokes = isMobile ? 6 : 8
      ctx.rotate(time * 0.25)
      for (let i = 0; i < coronaSpokes; i++) {
        const ang = (i / coronaSpokes) * Math.PI * 2
        const flareDist = (isMobile ? 24 : 36) + Math.sin(time * 2.6 + i * 1.5) * (isMobile ? 5 : 9)
        const fx = Math.cos(ang) * flareDist
        const fy = Math.sin(ang) * flareDist
        const corRadius = isMobile ? 14 : 22

        const prominenceGrad = ctx.createRadialGradient(fx, fy, 0, fx, fy, corRadius)
        prominenceGrad.addColorStop(0, isCoreHovered ? 'rgba(56, 189, 248, 0.55)' : 'rgba(56, 189, 248, 0.35)')
        prominenceGrad.addColorStop(0.6, 'rgba(14, 165, 233, 0.15)')
        prominenceGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = prominenceGrad
        ctx.beginPath()
        ctx.arc(fx, fy, corRadius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      // 5. Brilliant Anamorphic Lens Flare & Starlight Diffraction Rays
      const flareLen = (isMobile ? 70 : 115) + corePulse * (isMobile ? 6 : 12)
      const streakGrad = ctx.createLinearGradient(-flareLen, 0, flareLen, 0)
      streakGrad.addColorStop(0, 'rgba(56, 189, 248, 0)')
      streakGrad.addColorStop(0.28, 'rgba(56, 189, 248, 0.45)')
      streakGrad.addColorStop(0.46, 'rgba(186, 230, 253, 0.85)')
      streakGrad.addColorStop(0.5, '#ffffff')
      streakGrad.addColorStop(0.54, 'rgba(186, 230, 253, 0.85)')
      streakGrad.addColorStop(0.72, 'rgba(56, 189, 248, 0.45)')
      streakGrad.addColorStop(1, 'rgba(56, 189, 248, 0)')

      ctx.strokeStyle = streakGrad
      ctx.lineWidth = isMobile ? 1.4 : 1.8
      ctx.beginPath()
      ctx.moveTo(-flareLen, 0)
      ctx.lineTo(flareLen, 0)
      ctx.stroke()

      // Subtle Vertical Starlight Ray
      const vertLen = (isMobile ? 26 : 44) + corePulse * (isMobile ? 2 : 4)
      const vertGrad = ctx.createLinearGradient(0, -vertLen, 0, vertLen)
      vertGrad.addColorStop(0, 'rgba(56, 189, 248, 0)')
      vertGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.75)')
      vertGrad.addColorStop(1, 'rgba(56, 189, 248, 0)')
      ctx.strokeStyle = vertGrad
      ctx.lineWidth = isMobile ? 1.0 : 1.2
      ctx.beginPath()
      ctx.moveTo(0, -vertLen)
      ctx.lineTo(0, vertLen)
      ctx.stroke()

      // 6. Central Starlight Focus Singularity Point (Diamond glint)
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(0, 0, isMobile ? 3.2 : 4.5, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      // =======================================================================
      // D. ASTEROID DATA BELT (Synced with scroll & Responsively Scaled)
      // =======================================================================
      const scrollOrbitalDrive = scrollRatio * Math.PI * 4
      const responsiveScale = Math.max(0.52, Math.min(1.0, width / 1150))
      const mobileMultiplier = Math.min(1.06, Math.max(0.85, width / 400))

      const activeAsteroids = isMobile ? asteroids.filter((_, idx) => idx % 2 === 0) : asteroids
      activeAsteroids.forEach((ast) => {
        const curAngle = ast.baseAngle + (time * 0.3 + scrollOrbitalDrive) * ast.speedMultiplier
        const scaledDist = isMobile ? ast.dist * 0.40 * mobileMultiplier : ast.dist * responsiveScale
        const ax = Math.cos(curAngle) * scaledDist
        const ay = Math.sin(curAngle) * (scaledDist * orbitTiltY)

        ctx.fillStyle = isMobile ? 'rgba(255, 255, 255, 0.45)' : `rgba(255, 255, 255, ${ast.alpha})`
        ctx.beginPath()
        ctx.arc(coreX + ax, coreY + ay, isMobile ? ast.size * 1.1 : ast.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // =======================================================================
      // E. EYE-CATCHING ORBITING TECH TOOLS AROUND THE REACTOR (Responsively Scaled)
      // =======================================================================
      let hoveredToolInfo = null

      ctx.save()
      ctx.translate(coreX, coreY)

      // Active tools: 6 core tools on narrow mobile, 8 on wide mobile, all on tablet/desktop
      const activeTools = isMobile
        ? toolOrbits.filter((t) =>
            width < 500
              ? ['python', 'powerbi', 'sql', 'aiml', 'java', 'mysql'].includes(t.id)
              : ['python', 'powerbi', 'sql', 'aiml', 'java', 'mysql', 'pandas', 'numpy'].includes(t.id)
          )
        : toolOrbits

      activeTools.forEach((tool) => {
        const currentAngle = tool.baseAngle + (time * 0.35 + scrollOrbitalDrive) * tool.speedMultiplier
        const scaledDist = isMobile
          ? (tool.mobileDist || tool.distance * 0.5) * mobileMultiplier
          : tool.distance * responsiveScale
        const rx = scaledDist
        const ry = scaledDist * orbitTiltY
        const effectiveBadgeRadius = isMobile ? 14 : Math.max(12, tool.badgeRadius * responsiveScale)

        // 1. Sleek Cyber Orbital Vector Trace (distinct and clear on mobile)
        ctx.strokeStyle = isMobile ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.08)'
        ctx.lineWidth = isMobile ? 1.1 : 0.85
        ctx.setLineDash(isMobile ? [4, 8] : [4, 12])
        ctx.beginPath()
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])

        // 2. Tool Position along Orbit
        const px = Math.cos(currentAngle) * rx
        const py = Math.sin(currentAngle) * ry

        // 3. Touch / Mouse Hover Detection
        let isHovered = false
        if (mouse.x !== null && mouse.y !== null) {
          const globalPx = coreX + px
          const globalPy = coreY + py
          const distToMouse = Math.hypot(globalPx - mouse.x, globalPy - mouse.y)
          if (distToMouse < (isMobile ? 28 : 32 * responsiveScale)) {
            isHovered = true
            hoveredToolInfo = {
              tool,
              screenX: globalPx,
              screenY: globalPy,
            }

            // Highlight orbital track on hover with brand color
            ctx.strokeStyle = tool.brandColor
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
            ctx.stroke()
          }
        }

        ctx.save()
        ctx.translate(px, py)

        // 4. Vibrant Outer Ambient Brand Aura (Pulsing & Eye-Catching)
        const pulseSize = Math.sin(time * 3 + tool.distance) * (isMobile ? 1.5 : 2)
        const glowRadius = effectiveBadgeRadius * (isHovered ? 2.4 : 1.9) + pulseSize
        const toolGlow = ctx.createRadialGradient(0, 0, effectiveBadgeRadius * 0.4, 0, 0, glowRadius)
        toolGlow.addColorStop(0, tool.brandColor)
        toolGlow.addColorStop(0.45, `rgba(${tool.id === 'powerbi' ? '245, 158, 11' : '56, 189, 248'}, 0.3)`)
        toolGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = toolGlow
        ctx.beginPath()
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        // 5. Deep Obsidian Glass Chassis Disk with Radial Bevel
        const glassGrad = ctx.createRadialGradient(
          -effectiveBadgeRadius * 0.3, -effectiveBadgeRadius * 0.3, 0,
          0, 0, effectiveBadgeRadius
        )
        glassGrad.addColorStop(0, isHovered ? '#1e1e28' : '#14141c')
        glassGrad.addColorStop(0.85, '#0a0a10')
        glassGrad.addColorStop(1, '#050508')

        ctx.fillStyle = glassGrad
        ctx.beginPath()
        ctx.arc(0, 0, effectiveBadgeRadius, 0, Math.PI * 2)
        ctx.fill()

        // 6. Dual-Ring Neon Border with High Specular Gloss
        ctx.strokeStyle = isHovered ? tool.accentColor : tool.brandColor
        ctx.lineWidth = isHovered ? 2.0 : 1.3
        ctx.beginPath()
        ctx.arc(0, 0, effectiveBadgeRadius, 0, Math.PI * 2)
        ctx.stroke()

        // Outer delicate specular hairline
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)'
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.arc(0, 0, effectiveBadgeRadius + 1.4, 0, Math.PI * 2)
        ctx.stroke()

        // 7. Render Vivid Custom Tool Icon
        ctx.save()
        if (isMobile) {
          ctx.scale(0.85, 0.85)
        } else if (responsiveScale < 0.7) {
          ctx.scale(responsiveScale * 1.2, responsiveScale * 1.2)
        }
        tool.renderIcon(ctx)
        ctx.restore()

        // 8. Elegant Floating Badge Label Tag (Always visible on mobile for clarity!)
        const tagText = tool.name
        ctx.font = isMobile ? 'bold 8.5px "JetBrains Mono", monospace' : 'bold 9px "JetBrains Mono", monospace'
        const textWidth = ctx.measureText(tagText).width
        const tagY = effectiveBadgeRadius + (isMobile ? 11 : 13)

        ctx.fillStyle = isHovered ? 'rgba(18, 18, 26, 0.98)' : 'rgba(10, 10, 16, 0.92)'
        ctx.strokeStyle = isHovered ? tool.accentColor : (isMobile ? tool.brandColor : 'rgba(255, 255, 255, 0.2)')
        ctx.lineWidth = isMobile ? 1.0 : 0.8
        ctx.beginPath()
        if (ctx.roundRect) {
          ctx.roundRect(-textWidth / 2 - 5, tagY - 8, textWidth + 10, 12.5, 4)
        } else {
          ctx.rect(-textWidth / 2 - 5, tagY - 8, textWidth + 10, 12.5)
        }
        ctx.fill()
        ctx.stroke()

        ctx.textAlign = 'center'
        ctx.fillStyle = isHovered ? '#ffffff' : (isMobile ? '#f8fafc' : 'rgba(226, 232, 240, 0.9)')
        ctx.fillText(tagText, 0, tagY + 1.5)

        ctx.restore()
      })

      ctx.restore()

      // =======================================================================
      // F. INTERACTIVE TELEMETRY TOOLTIP (Tools or Plasma Core)
      // =======================================================================
      if (hoveredToolInfo) {
        const { tool, screenX, screenY } = hoveredToolInfo
        ctx.save()
        ctx.font = 'bold 11px "JetBrains Mono", monospace'
        ctx.fillStyle = '#ffffff'
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(0,0,0,0.95)'

        const tooltipX = isMobile ? Math.max(16, Math.min(width - 155, screenX - 50)) : screenX + 30
        const tooltipY = isMobile ? Math.max(60, screenY - 35) : screenY - 30

        ctx.strokeStyle = tool.brandColor
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(screenX, screenY - 12)
        ctx.lineTo(tooltipX, tooltipY + 16)
        ctx.lineTo(tooltipX + 130, tooltipY + 16)
        ctx.stroke()

        ctx.fillText(tool.name, tooltipX + 6, tooltipY + 12)
        ctx.font = '10px "JetBrains Mono", monospace'
        ctx.fillStyle = tool.accentColor
        ctx.fillText(tool.tag, tooltipX + 6, tooltipY + 26)
        ctx.restore()
      } else if (isCoreHovered) {
        // Plasma Core Overdrive Telemetry
        ctx.save()
        ctx.font = 'bold 11px "JetBrains Mono", monospace'
        ctx.fillStyle = '#38bdf8'
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(0,0,0,0.95)'

        const tooltipX = isMobile ? Math.max(16, Math.min(width - 195, coreX - 80)) : coreX + 40
        const tooltipY = isMobile ? Math.max(50, coreY - 45) : coreY - 40

        ctx.strokeStyle = '#38bdf8'
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(coreX + 10, coreY - 10)
        ctx.lineTo(tooltipX, tooltipY + 16)
        ctx.lineTo(tooltipX + 175, tooltipY + 16)
        ctx.stroke()

        ctx.fillText('ATMOSPHERIC PLASMA CORE', tooltipX + 6, tooltipY + 12)
        ctx.font = '10px "JetBrains Mono", monospace'
        ctx.fillStyle = '#ffffff'
        ctx.fillText('STELLAR FLUX // 100% OPERATIONAL', tooltipX + 6, tooltipY + 26)
        ctx.restore()
      }

      // =======================================================================
      // G. CLICK / TOUCH SHOCKWAVES
      // =======================================================================
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rp = ripples[r]
        rp.radius += 3.5
        rp.opacity -= 0.012

        ctx.strokeStyle = `rgba(56, 189, 248, ${Math.max(0, rp.opacity)})`
        ctx.lineWidth = isMobile ? 1.4 : 1.2
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.radius, 0, Math.PI * 2)
        ctx.stroke()

        if (rp.opacity <= 0 || rp.radius >= rp.maxRadius) {
          ripples.splice(r, 1)
        }
      }

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060709]">
      {/* 1. Subtle Precision Ambient Glow Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_46%,rgba(255,255,255,0.03),transparent_75%)]" />

      {/* 2. Interactive Scroll-Synced Solar System Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-auto" />
    </div>
  )
}
