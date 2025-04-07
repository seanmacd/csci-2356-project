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
import Squash1 from '@/assets/audio/Bug-Hit-001.mp3';
import Squash2 from '@/assets/audio/Bug-Hit-002.mp3';
import Squash3 from '@/assets/audio/Bug-Hit-003.mp3';
import Squash4 from '@/assets/audio/Bug-Hit-004.mp3';
import Complete from '@/assets/audio/Complete.mp3';
import Failed from '@/assets/audio/Failed.mp3';
import { Timer } from './Timer';
import { GameModal } from './GameModal';

/**
 * DrawBugs Component: 
 * Draws randomized bugs on leaf canvas. Allows users to click on bug to get rid of them and increase saturation
 * on leaf until all bugs are completed. Also implements GameModal and Timer componenets giving the user a score based on how
 * fast they got rid of the bugs.
 * 
 * @authors Connor, Wenda, Sean
 */

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
  const [saturationLevel, setSaturationLevel] = useState(0)

  const [startTimer, setIsTimerActive] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [score, setScore] = useState(30)

  // Call function every time we update the time.
  const handleTimeUpdate = (secondsLeft: number) => {
    setScore(secondsLeft)
    
    // Automatically stopping the game once the timer hits 0
    if(secondsLeft <= 0) {
      setIsTimerActive(false)
      setIsModalOpen(true) 
    }
  }

  const bugSounds = useRef<HTMLAudioElement[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    // array of random bug sounds: Connor
    bugSounds.current = [
      new Audio(Squash1),
      new Audio(Squash2),
      new Audio(Squash3),
      new Audio(Squash4),
    ]

    const leaf = new Image()
    leaf.src = leafImageSrc

    // Mapping bugs to image using x,y coords. Will pick random bug image from list
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

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || bugs.length === 0) {
      return
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Changing bug visability when clicked within the 50x50 region
    const updatedBugs = bugs.map((bug) => {
      if (
        bug.visible &&
        x >= bug.x &&
        x <= bug.x + 50 &&
        y >= bug.y &&
        y <= bug.y + 50
      ) {

        // Setting the timer to active when a bug is clicked : Connor
        if (!startTimer) {
          setIsTimerActive(true)
        }

        // Plays random bug sound from array: Connor
        const randomSound = bugSounds.current[Math.floor(Math.random() * bugSounds.current.length)]
        const clone = randomSound.cloneNode() as HTMLAudioElement
        clone.play()

        return {
          ...bug, visible: false
        }
      }
      return bug
    })

    // Updating remaining bugs (only visible ones)
    const bugsRemaining = updatedBugs.filter(b => b.visible).length

    // If all bugs are squashed, stop the timer and open the modal
    if (bugsRemaining == 0) {
      setIsTimerActive(false)
      setIsModalOpen(true)
    }

    const newSaturation = 1 - bugsRemaining / bugs.length

    // Setting new saturation
    setSaturationLevel(newSaturation)
    setBugs(updatedBugs)

    // Redraw 
    const leaf = new Image()
    leaf.src = leafImageSrc
    leaf.onload = () => drawAll(ctx, leaf, updatedBugs)
  }

  const drawAll = (
    ctx: CanvasRenderingContext2D,
    leaf: HTMLImageElement,
    bugList: Bug[]
  ) => {
    const { width, height } = ctx.canvas

    const offCanvas = document.createElement('canvas')
    offCanvas.width = width
    offCanvas.height = height
    const offCtx = offCanvas.getContext('2d')
    if (!offCtx) return

    offCtx.drawImage(leaf, 0, 0, width, height)

    const imageData = offCtx.getImageData(0, 0, width, height)
    const data = imageData.data
    const saturation = 0.1 + 0.9 * saturationLevel

    // Changing the pixel colors to account for IOS not supporting filters
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const { h, s, l } = rgbToHsl(r, g, b)
      const { r: newR, g: newG, b: newB } = hslToRgb(h, s * saturation, l)
      data[i] = newR
      data[i + 1] = newG
      data[i + 2] = newB
    }

    offCtx.putImageData(imageData, 0, 0)
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(offCanvas, 0, 0, width, height)

    // Drawing the visible bug images
    bugList.forEach((bug) => {
      if (bug.visible) {
        ctx.drawImage(bug.image, bug.x, bug.y, 50, 50)
      }
    })
  }

  // RGB TO HSL, taken from Github and modified with ChatGPT. Permission from Terry. 
  // https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0, s = 0, l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    return { h, s, l }
  }

  // RGB TO HSL, taken from Github and modified with ChatGPT. Permission from Terry. 
  // https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786
  const hslToRgb = (h: number, s: number, l: number) => {
    let r: number, g: number, b: number

    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q

      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }

  // Finally displaying the data
  useEffect(() => {
    if (isModalOpen) {
      const sound = score > 0 
        ? new Audio(Complete) 
        : new Audio(Failed);
      sound.play();
    }
  }, [isModalOpen, score]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mt-4 space-x-4">
          <Timer startSeconds={15} isActive={startTimer} onTimeUpdate={handleTimeUpdate} />
        </div>
        <canvas
          id={canvasId}
          ref={canvasRef}
          width={400}
          height={400}
          onClick={handleCanvasClick}
          style={{ touchAction: 'manipulation' }}
        />
      </div>
      {isModalOpen && (
        <GameModal
          score={score.toString()}
          Highscore={"Coming Soon!"} // Replace with actual high score logic later
        />
      )}
    </>
  )
}
