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
  [105, 100],
  [200, 60],
  [300, 200],
  [220, 280],
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
          subText='Click the bug to begin the game. Clear all the bugs within 15 seconds and I will reward you with some acorns!'
          audioSrc={HowToPlayAudio}
          ></TextBox>
        </div>
      </aside>
  </div>
  )
}
