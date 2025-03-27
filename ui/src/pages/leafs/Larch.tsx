// Rongkun Page2 
// Modified by: Wenda, adjusted for new DrawBugs component. 
import larchAudio from '@/assets/audio/larch.mp3'
import larchPhoto from '@/assets/leafPhotos/Larch_Cartoon.png'
import {PlayAgainButton, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'
import DrawBugs from '@/components/DrawBugs'

// Bug locations
const bugPositions: [number, number][] = [
  [230, 25],
  [290, 100],
  [313, 185],
  [345, 310],
  [115, 35],
  [10, 65],
  [25, 210],
  [125, 310],
]

export function LarchLeafPage() {
    return (
      <>
        <title>Larch</title>
        <LeafNameHeader name="Larch" />
        <main>
          <div className="flex justify-center">
            <DrawBugs
              canvasId="larch"
              leafImageSrc={larchPhoto}
              bugPositions={bugPositions}
            />
          </div>
          <div className="flex justify-center">
            <PlayAgainButton />
          </div>
        </main>
        <aside>
          <div>
            <TangoText
              text="This is a larch leaf! Unlike pine trees, larch trees lose their needles in the fall."
              audio={larchAudio}
            />
          </div>
        </aside>
    </>
    )
  }

