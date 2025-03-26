import { useEffect, useRef, useState } from 'react'
import Bug1 from '@/assets/bugPhotos/Bug1.png'
import Bug2 from '@/assets/bugPhotos/Bug2.png'
import Bug3 from '@/assets/bugPhotos/Bug3.png'
import Bug4 from '@/assets/bugPhotos/Bug4.png'
import Bug5 from '@/assets/bugPhotos/Bug5.png'
import Bug6 from '@/assets/bugPhotos/Bug6.png'
import Bug7 from '@/assets/bugPhotos/Bug7.png'
import Bug8 from '@/assets/bugPhotos/Bug8.png'
import Bug9 from '@/assets/bugPhotos/Bug9.png'
import Bug10 from '@/assets/bugPhotos/Bug10.png'
import Bug11 from '@/assets/bugPhotos/Bug11.png'
import Bug12 from '@/assets/bugPhotos/Bug12.png'

const bugImages = [
  Bug1, Bug2, Bug3, Bug4, Bug5, Bug6, Bug7, Bug8, Bug9, Bug10, Bug11, Bug12,
]

type Bug = {
  x: number
  y: number
  image: HTMLImageElement
  visible: boolean
}

type Props = {
  canvasId: string
  leafImageSrc: string
  bugPositions: [number, number][]
}

export default function BugCanvas({ canvasId, leafImageSrc, bugPositions }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [bugs, setBugs] = useState<Bug[]>([])
  const [sepia, setSepia] = useState(1)

  // Initialize all images once
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const leaf = new Image()
    leaf.src = leafImageSrc

    const bugList: Bug[] = bugPositions.map(([x, y]) => {
      const bugImage = new Image()
      bugImage.src = bugImages[Math.floor(Math.random() * bugImages.length)]
      return { x, y, image: bugImage, visible: true }
    })

    let loadedCount = 0
    const total = 1 + bugList.length

    const tryDraw = () => {
      loadedCount++
      if (loadedCount < total) return
      drawAll(ctx, leaf, bugList)
      setBugs(bugList)
    }

    leaf.onload = tryDraw
    bugList.forEach((bug) => (bug.image.onload = tryDraw))
  }, [leafImageSrc, bugPositions])

  // Draw everything
  const drawAll = (
    ctx: CanvasRenderingContext2D,
    leaf: HTMLImageElement,
    bugList: Bug[],
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Set sepia filter
    ctx.filter = `sepia(${sepia})`
    ctx.drawImage(leaf, 0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.filter = 'none'
    for (const bug of bugList) {
      if (bug.visible) {
        ctx.drawImage(bug.image, bug.x, bug.y, 50, 50)
      }
    }
  }

  // Click detection
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || bugs.length === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const updatedBugs = bugs.map((bug) => {
      if (
        bug.visible &&
        x >= bug.x &&
        x <= bug.x + 50 &&
        y >= bug.y &&
        y <= bug.y + 50
      ) {
        return { ...bug, visible: false }
      }
      return bug
    })

    const bugsRemaining = updatedBugs.filter((b) => b.visible).length
    const newSepia = Math.max(0, bugsRemaining / bugs.length)

    setSepia(newSepia)
    setBugs(updatedBugs)

    const leaf = new Image()
    leaf.src = leafImageSrc
    leaf.onload = () => drawAll(ctx, leaf, updatedBugs)
  }

  return (
    <canvas
      id={canvasId}
      ref={canvasRef}
      width={400}
      height={400}
      onClick={handleCanvasClick}
      style={{ cursor: 'pointer' }}
    />
  )
}
