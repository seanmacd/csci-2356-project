import YellowBirch from '@/assets/audio/YellowBirchAudio.mp3'
import yellow_birch_cartoon from '@/assets/leafPhotos/YellowBirch_Cartoon.png'
import {TangoText} from '@/components'
import DrawBugs from '@/components/DrawBugs'

/**
 * Wenda's leaf page using the DrawBugs componenet and TangoText for fact. 
 */

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
  return (<div>
      <title>Yellow Birch Game</title>
      <main>
        <div className="flex justify-center">
          <DrawBugs
            canvasId="yellowBirch"
            leafImageSrc={yellow_birch_cartoon}
            bugPositions={bugPositions}
          />
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
  </div>
  )
}
