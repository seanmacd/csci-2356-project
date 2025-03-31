// Wendas page
import YellowBirch from '@/assets/audio/YellowBirchAudio.mp3'
import yellow_birch_cartoon from '@/assets/leafPhotos/YellowBirch_Cartoon.png'
import {TangoText} from '@/components'
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
      <main>
        <div className="flex justify-center">
          <DrawBugs
            canvasId="yellowBirch"
            leafImageSrc={yellow_birch_cartoon}
            bugPositions={bugPositions}
          />
        </div>
        
        { // No longer need play again button, we have the popup menu that appears after and home button in header. 
        
        /* <div className="flex justify-center">
          <PlayAgainButton />
        </div> */}
        
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
