//Rongkun's Page

import HowToPlayAudio from '@/assets/audio/HowToPlay.mp3'
import sugarMaplePhoto from '@/assets/leafPhotos/SugarMaple_Cartoon.png'
import {TextBox} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'
import DrawBugs from '@/components/DrawBugs'
import Tango from '@/assets/tangoPhotos/tango-talking.png'


const bugPositions: [number, number][] = [
  [181, 20],
  [330, 95],
  [30, 95],
  [230, 135],
  [140, 135],
  [30, 190],
  [320, 190],
  [320, 235],
  [40, 235],
  [105, 300],
  [265, 300],
  [181, 340]

  

]

export function SugarMapleLeafPage() {
  return (
    <div >
      <title>Sugar Maple Game</title>
      <LeafNameHeader name="Sugar Maple" />
      <main>
        <div className="flex justify-center">
          <DrawBugs canvasId="sugarMaple" leafImageSrc={sugarMaplePhoto} bugPositions={bugPositions}/>        
        </div>

        <TextBox
        image={Tango} 
        imageAltText='Tango the fox' 
        headerText='How To Play?' 
        subText='Click the bug to begin the game. Clear all the bugs within 30 seconds and I will reward you with some acorns!'
        audioSrc={HowToPlayAudio}
        ></TextBox>
      </main>
    </div>
  )
}
