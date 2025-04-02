import HowToPlayAudio from '@/assets/audio/HowToPlay.mp3'
import larchPhoto from '@/assets/leafPhotos/Larch_Cartoon.png'
import {TextBox} from '@/components'
import Tango from '@/assets/tangoPhotos/tango-talking.png'

import DrawBugs from '@/components/DrawBugs'

/**
 * Rongkun's Leaf Page 2
 * Modified by Wenda to use the DrawBugs componenet and TangoText for the fact fact. 
 */

// Bug locations
const bugPositions: [number, number][] = [
  [230, 25],
  [290, 100],
  [313, 185],
  [345, 310],
  [115, 35],
  [10, 65],
  [25, 210],
  [125, 310],
]

export function LarchLeafPage() {
    return (
      <>
        <title>Larch Leaf Game</title>
        <main>
          <div className="flex justify-center">
            <DrawBugs
              canvasId="larch"
              leafImageSrc={larchPhoto}
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
    </>
    )
  }

