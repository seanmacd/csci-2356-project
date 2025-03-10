// sean's page
import redOakPhotoroom from '@/assets/Red-Oak-Photoroom.png'
import {Button, Header, LeafImage, TangoText} from '@/components'
import { LeafNameHeader } from '@/components/LeafNameHeader'
import Redoak from '@/assets/redoak.mp3'

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
        <Button />
      </div>
      <TangoText text="This is a red oak tree leaf, in the fall they turn red." audio={Redoak} />
    </>
  )
}
