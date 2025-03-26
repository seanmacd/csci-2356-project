// Wendas page
import YellowBirch from '@/assets/audio/YellowBirchAudio.mp3'
import yellow_birch_cartoon from '@/assets/leafPhotos/YellowBirch_Cartoon.png'
import { PlayAgainButton, TangoText } from '@/components'
import { LeafNameHeader } from '@/components/LeafNameHeader'
import DrawBugs from '@/components/DrawBugs'

// Bug locations
const bugPositions: [number, number][] = [
  [320, 50],
  [55, 280],
  [67, 150],
  [125, 75],
  [220, 60],
  [300, 150],
  [265, 250],
  [180, 290],
]

export function YellowBirchLeafPage() {
  return (
    <>
      <title>Yellow Birch Game</title>
      <LeafNameHeader name="Yellow Birch" />
      <main>
        <div className="flex justify-center">
          <DrawBugs
            canvasId="yellowBirch"
            leafImageSrc={yellow_birch_cartoon}
            bugPositions={bugPositions}
          />
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
