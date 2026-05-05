import { useRef, useEffect } from 'react'
import * as THREE from 'three'

/**
 * A self-contained Three.js canvas rendering an animated torus knot
 * with orbiting particles and mouse-reactive rotation.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 5)

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const dl1 = new THREE.DirectionalLight(0x3b6ff5, 2)
    dl1.position.set(5, 5, 5)
    scene.add(dl1)
    const dl2 = new THREE.DirectionalLight(0x7c55f0, 1.5)
    dl2.position.set(-5, -3, 3)
    scene.add(dl2)
    const pl = new THREE.PointLight(0x00b8d4, 2, 10)
    pl.position.set(2, -2, 3)
    scene.add(pl)

    // Torus knot
    const geo = new THREE.TorusKnotGeometry(1.1, 0.36, 140, 20)
    const mat = new THREE.MeshPhongMaterial({
      color: 0xffffff, specular: 0x3b6ff5, shininess: 120,
      transparent: true, opacity: 0.92,
    })
    const knot = new THREE.Mesh(geo, mat)
    scene.add(knot)

    // Wireframe overlay
    scene.add(new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0x3b6ff5, wireframe: true, transparent: true, opacity: 0.08 })
    ))

    // Orbiting particles
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 1.8 + Math.random() * 1.2
      pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pPos[i * 3 + 2] = r * Math.cos(phi)
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pts = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0x3b6ff5, size: 0.025, transparent: true, opacity: 0.5 })
    )
    scene.add(pts)

    // Mouse reactive rotation
    let mx = 0, my = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    let t = 0, animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.008
      knot.rotation.x = t * 0.4 + my * 0.2
      knot.rotation.y = t * 0.6 + mx * 0.2
      pts.rotation.y = t * 0.15
      pts.rotation.x = t * 0.08
      // Slowly shift directional light hue
      dl1.color.setHSL(((t * 30) % 360) / 360, 0.8, 0.6)
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        width: '100%',
        maxWidth: 520,
        height: 520,
        borderRadius: '50%',
        filter: 'drop-shadow(0 0 60px rgba(59,111,245,0.18))',
        display: 'block',
      }}
    />
  )
}
