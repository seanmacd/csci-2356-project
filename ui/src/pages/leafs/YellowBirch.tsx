import { useEffect } from 'react'
import { drawBugs } from '@/components/DrawBugs'
import YellowBirch from '@/assets/audio/YellowBirchAudio.mp3'
import yellow_birch_cartoon from '@/assets/leafPhotos/YellowBirch_Cartoon.png'
import { PlayAgainButton, TangoText } from '@/components'
import { LeafNameHeader } from '@/components/LeafNameHeader'

const bugPositions: [number, number][] = [
  [405, 60],
  [60, 350],
  [68, 210],
  [125, 115],
  [240, 70],
  [390, 150],
  [370, 250],
  [285, 350],
]

export function YellowBirchLeafPage() {
  // This uses the image, positions list, and id to create a canvas with the bug images.
  useEffect(() => {
    drawBugs(yellow_birch_cartoon, bugPositions, 'yellowBirch')
  }, [])
  

  return (
    <>
      <title>Yellow Birch Game</title>
      <LeafNameHeader name="Yellow Birch" />
      <main>
        <div className="flex justify-center">
          <canvas id="yellowBirch" width={400} height={400} />
        </div>
        <div className="flex justify-center">
          <PlayAgainButton />
        </div>
      </main>
      <aside>
        <div>
          <TangoText
            text="This is a Yellow Birch, they've adapted to live in our salty climates!"
            audio={YellowBirch}
          />
        </div>
      </aside>
    </>
  )
}
