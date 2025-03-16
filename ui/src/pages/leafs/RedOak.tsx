// sean's page
import redOakPhotoroom from '@/assets/leafPhotos/RedOak_Cartoon.png'
import {PlayAgainButton, Header, LeafImage, TangoText} from '@/components'
import { LeafNameHeader } from '@/components/LeafNameHeader'
import Redoak from '@/assets/audio/redoak.mp3'

export function RedOakLeafPage() {
  return (
    <>
      <title>Red Oak</title>
      <Header />
      <LeafNameHeader name="Red Oak" />
      <div className="flex justify-center">
        <LeafImage src={redOakPhotoroom} alt="Image of red oak leaf" />
      </div>
      <div className="flex justify-center">
        <PlayAgainButton />
      </div>
      <TangoText text="This is a red oak tree leaf, in the fall they turn red." audio={Redoak} />
    </>
  )
}
