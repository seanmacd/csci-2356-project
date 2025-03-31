//Rongkun's Page

import sugarMapleAudio from '@/assets/audio/sugarMaple.mp3'
import sugarMaplePhoto from '@/assets/leafPhotos/SugarMaple_Cartoon.png'
import {PlayAgainButton, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'
import DrawBugs from '@/components/DrawBugs'

const bugPositions: [number, number][] = [
  [181, 20],
  [330, 95],
  [30, 95],
  [230, 120],
  [130, 120],
  [40, 190],
  [320, 190],
  [320, 235],
  [40, 235],
  [105, 300],
  [265, 300],

  

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

        <div className="flex justify-center">
          <PlayAgainButton />
        </div>

        <div className="spacing">
          <TangoText
            text="This is a sugar maple leaf! Did you know this tree is where maple syrup comes from?"
            audio={sugarMapleAudio}
          />
        </div>
      </main>
    </div>
  )
}
