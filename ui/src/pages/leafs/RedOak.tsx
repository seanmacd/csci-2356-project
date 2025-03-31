import Redoak from '@/assets/audio/redoak.mp3'
import RedOak_cartoon from '@/assets/leafPhotos/RedOak_Cartoon.png'
import {TangoText} from '@/components'
import DrawBugs from '@/components/DrawBugs'

/**
 * Sean's page
 */

const bugPositions: [number, number][] = [
  [25, 330],
  [130, 315],
  [250, 300],
  [330, 190],
  [300, 15],
  [125, 30],
  [45, 170],
  [35, 250],
]

export function RedOakLeafPage() {
  return (
    <>
      <title>Red Oak Game</title>
      <main>
        <div className="flex justify-center">
          <DrawBugs
            canvasId="redOak"
            leafImageSrc={RedOak_cartoon}
            bugPositions={bugPositions}
          />
        </div>
      </main>
      
      <aside>
        <div>
          <TangoText
            text="This is a red oak tree leaf, in the fall they turn red!"
            audio={Redoak}
          />
        </div>
      </aside>
    </>
  )
}
