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

type BugPosition = [number, number]

// List of all our bugs to randomize 
const bugImages = [
  Bug1, Bug2, Bug3, Bug4, Bug5, Bug6, Bug7, Bug8, Bug9, Bug10, Bug11, Bug12,
]

// Function to get a random bug image
function getRandomBugImage(): string {
  const randomIndex = Math.floor(Math.random() * bugImages.length)
  return bugImages[randomIndex]
}

// Page
export function drawBugs(
  leafImageSrc: string,
  bugPositions: BugPosition[],
  canvasId: string,
) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  const ctx = canvas?.getContext('2d')

  if (!ctx) {
    return
  }

  const leaf = new Image()
  leaf.src = leafImageSrc

  const bugImagesToDraw = bugPositions.map(() => {
    const bug = new Image()
    bug.src = getRandomBugImage()
    return bug
  })

  let loadedCount = 0
  const totalToLoad = 1 + bugImagesToDraw.length 

  // Will load all the bugs at once to prevent multiple bugs per location.
  const tryDraw = () => {
    loadedCount++
    if (loadedCount < totalToLoad) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(leaf, 0, 0, canvas.width, canvas.height)

    bugPositions.forEach(([x, y], index) => {
      const bug = bugImagesToDraw[index]
      ctx.drawImage(bug, x, y, 70, 70)
    })
  }

  leaf.onload = tryDraw
  bugImagesToDraw.forEach((img) => {
    img.onload = tryDraw
  })
}
