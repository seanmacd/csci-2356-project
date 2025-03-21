// wenda's page
// Has components for the button, header, tango bubble, and uses imported image and audio. 

import YellowBirch from '@/assets/audio/YellowBirchAudio.mp3'
import yellow_birch_cartoon from '@/assets/leafPhotos/YellowBirch_Cartoon.png'
import { PlayAgainButton, TangoText } from '@/components'
import { LeafNameHeader } from '@/components/LeafNameHeader'

export function YellowBirchLeafPage() {
  return (
    <div >
      <title>Yellow Birch Game</title>

      <LeafNameHeader name="Yellow Birch" />

      <main>
        <div className="flex justify-center ">
          <img className="fox-tree-logo" src={yellow_birch_cartoon} alt="yellow_birch_cartoon.png picture" />
        </div>
        <div className="flex justify-center  ">
          <PlayAgainButton />
        </div>
        <div >
          <TangoText
            text="This is a Yellow Birch, they've adapted to live in our salty climates!"
            audio={YellowBirch}
          />
        </div>
      </main>
    </div>
  )
}
