{
  /* Red Maple Page. Connor */
}

import {PlayAgainButton, Header, LeafImage, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'
import redMaple from '@/assets/leafPhotos/Red-Maple-Photoroom.png'
import redMapleAudio from '@/assets/audio/Red-Maple.mp3'



export function RedMapleLeafPage() {
  return (
    <>
      <title>Red Maple</title>
      <Header />
      <LeafNameHeader name="Red Maple" />
      <div className="flex justify-center">
        <LeafImage
          src={redMaple}
          alt="Image of red maple leaf"
        />
      </div>
      <div className="flex justify-center">
        <PlayAgainButton />
      </div>
        <TangoText text="This is a red maple tree leaf, its on the Canadian flag!" audio={redMapleAudio} />
    </>
  )
}
