import HowToPlayAudio from '@/assets/audio/HowToPlay.mp3'
import yellow_birch_cartoon from '@/assets/leafPhotos/YellowBirch_Cartoon.png'
import {TextBox} from '@/components'
import DrawBugs from '@/components/DrawBugs'
import Tango from '@/assets/tangoPhotos/tango-talking.png'


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
          <TextBox
          image={Tango} 
          imageAltText='Tango the fox' 
          headerText='How To Play?' 
          subText='Click the bug to begin the game. Clear all the bugs within 30 seconds and I will reward you with some acorns!'
          audioSrc={HowToPlayAudio}
          ></TextBox>
        </div>
      </aside>
  </div>
  )
}
