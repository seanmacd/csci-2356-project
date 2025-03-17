// sean's page

import Redoak from '@/assets/audio/redoak.mp3'
import redOakPhotoroom from '@/assets/leafPhotos/Red-Oak-Photoroom.png'
import {Header, LeafImage, PlayAgainButton, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'

export function RedOakLeafPage() {
  return (
    <>
      <title>Red Oak</title>
      <div className="max-w-3xl mx-auto">
        <Header />
        <LeafNameHeader name="Red Oak" />
        <div className="flex justify-center">
          <LeafImage src={redOakPhotoroom} alt="Image of red oak leaf" />
        </div>
        <div className="flex justify-center">
          <PlayAgainButton />
        </div>
        <TangoText text="This is a red oak tree leaf, in the fall they turn red." audio={Redoak} />
      </div>
    </>
  )
}
