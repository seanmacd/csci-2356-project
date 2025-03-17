//Rongkun's Page

import sugarMaple from '@/assets/audio/sugarMaple.mp3'
import sugarMaplePhoto from '@/assets/leafPhotos/SugarMaple_Cartoon.png'
import {PlayAgainButton, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'

import './styles.css'

export function SugarMapleLeafPage() {
  return (
    <div className="body_background">
      <title>Sugar Maple Game</title>
      <LeafNameHeader name="Sugar Maple" />
      <main>
        <div className="flex justify-center spacing">
          <img className="fox-tree-logo" src={sugarMaplePhoto} alt="SugarMaple_Cartoon.png picture" />
        </div>

        <div className="flex justify-center spacing button_spacing">
          <PlayAgainButton />
        </div>

        <div className="spacing">
          <TangoText
            text="This is a sugar maple leaf! Did you know this tree is where maple syrup comes from?"
            audio={sugarMaple}
          />
        </div>
      </main>
    </div>
  )
}
