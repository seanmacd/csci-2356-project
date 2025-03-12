{
  /* Red Maple Page. Connor */
}

import {PlayAgainButton, Header, LeafImage, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'
import redMaple from '@/assets/Red-Maple-Photoroom.png'
import yellowbirchtest from '@/assets/yellowbirchtest.mp3'


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
      <TangoText
        text="This is a red maple tree leaf, its on Canada's flag." audio={yellowbirchtest}
      />
    </>
  )
}
