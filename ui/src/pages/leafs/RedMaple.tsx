{
  /* Red Maple Page. Connor */
}

import {Button, Header, LeafImage, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'
import redMaple from '@/assets/Red-Maple-Photoroom.png'


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
        <Button />
      </div>
      <TangoText
        text="This is a red maple tree leaf, its on Canada's flag."
      />
    </>
  )
}
