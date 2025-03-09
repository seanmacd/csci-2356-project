import yellow_birch_cartoon from '../../assets/yellow_birch_cartoon.png'

import './styles.css'

import {Button} from '../../components/Button'
import {TangoText} from '../../components/TangoText'

export function YellowBirchLeafPage() {
  return (
    <div className="body_background">
      <title>Yellow Birch Game</title>

      <header className="row-auto bg-amber-950">
        <div className="box-border size 32 border-3 py-3 px-5 bg-amber-200 text-center text-black text-4xl project_font font-bold">
          Yellow Birch
        </div>
      </header>

      <main>
        <div className="flex justify-center spacing">
          <img className="fox-tree-logo" src={yellow_birch_cartoon} alt="yellow_birch_cartoon.png picture" />
        </div>

        <div className="flex justify-center spacing button_spacing">
          <Button />
        </div>

        <div className="spacing">
          <TangoText text="This is a Yellow Birch" />
        </div>
      </main>
    </div>
  )
}
