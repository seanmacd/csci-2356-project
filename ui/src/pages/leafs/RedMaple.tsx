// Connor's page
// Implements components for the button, header, tango bubble, and uses imported image and audio. 

import redMapleAudio from '@/assets/audio/Red-Maple.mp3'
import redMaple from '@/assets/leafPhotos/RedMaple_Cartoon.png'
import {LeafImage, PlayAgainButton, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'

export function RedMapleLeafPage() {
  return (
    <>
      <title>Red Maple</title>
      <LeafNameHeader name="Red Maple" />
      <div className="flex justify-center">
        <LeafImage src={redMaple} alt="Image of red maple leaf" />
      </div>
      <div className="flex justify-center">
        <PlayAgainButton />
      </div>
      <TangoText text="This is a red maple tree leaf, its on the Canadian flag!" audio={redMapleAudio} />
    </>
  )
}
