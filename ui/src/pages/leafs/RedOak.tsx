// sean's page
import {Button, Header, LeafImage, TangoText} from '@/components'
import yellow_birch_cartoon from '@/assets/yellow_birch_cartoon.png'

export function RedOakLeafPage() {
  return (
    <>
      <title>Red Oak</title>
      <Header />
      <div className="flex justify-center">
        {/* Temp image */}
        <LeafImage
          src={yellow_birch_cartoon}
          alt="Image of red oak leaf"
        />
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
      <TangoText
        text="This is a red oak tree leaf, in the fall they turn red."
      />
    </>
  )
}
