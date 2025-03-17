//Rongkun's Page

import sugarMaple from '@/assets/sugarMaple.mp3'
import sugarMaplePhoto from '@/assets/leapPhotos/Sugar-Maple-Photoroom.png'
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
          <img className="fox-tree-logo" src={sugarMaplePhoto} alt="Sugar-Maple-Photoroom.png picture" />
        </div>

        <div className="flex justify-center spacing button_spacing">
          <PlayAgainButton />
        </div>

        <div className="spacing">
          <TangoText
            text="This is a Yellow Birch, they've adapted to live in our salty climates!"
            audio={sugarMaple}
          />
        </div>
      </main>
    </div>
  )
}
