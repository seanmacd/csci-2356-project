import yellow_birch_cartoon from '@/assets/Yellow-Birch-Photoroom.png'
import {PlayAgainButton, TangoText, Header} from '@/components'
import yellowbirchtest from '@/assets/yellowbirchtest.mp3'
import {LeafNameHeader} from '@/components/LeafNameHeader'

import './styles.css'

export function YellowBirchLeafPage() {
  return (
    <div className="body_background">
      <title>Yellow Birch Game</title>

      <Header>  
      </Header>
      <LeafNameHeader name="Yellow Birch" />
      <main>
        <div className="flex justify-center spacing">
          <img className="fox-tree-logo" src={yellow_birch_cartoon} alt="yellow_birch_cartoon.png picture" />
        </div>

        <div className="flex justify-center spacing button_spacing">
          <PlayAgainButton />
        </div>

        <div className="spacing">
          <TangoText text="This is a Yellow Birch, they've adapted to live in our salty climats!" audio={yellowbirchtest}/>
        </div>
      </main>
    </div>
  )
}
