import Redoak from '@/assets/audio/redoak.mp3'
import RedOak_cartoon from '@/assets/leafPhotos/RedOak_Cartoon.png'
import Tango from '@/assets/tangoPhotos/tango-talking.png'
import {TextBox} from '@/components'
import DrawBugs from '@/components/DrawBugs'

/**
 * Red Oak Leaf Page
 * 
 * @authors Sean
 */

const bugPositions: [number, number][] = [
  [25, 330],
  [130, 315],
  [250, 300],
  [330, 190],
  [300, 15],
  [125, 30],
  [45, 170],
  [35, 250],
]

export function RedOakLeafPage() {
  return (
    <>
      <title>Red Oak Game</title>
      <main>
        <div className="flex justify-center">
          <DrawBugs
            canvasId="redOak"
            leafImageSrc={RedOak_cartoon}
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
          audioSrc={Redoak}
          ></TextBox>
        </div>
      </aside>
    </>
  )
}
