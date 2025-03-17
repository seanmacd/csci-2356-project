//Rongkun Page2 
import larchAudio from '@/assets/audio/larch.mp3'
import larchPhoto from '@/assets/leafPhotos/Larch_Cartoon.png'
import {LeafImage, PlayAgainButton, TangoText} from '@/components'
import {LeafNameHeader} from '@/components/LeafNameHeader'

export function LarchLeafPage() {
    return (
      <>
        <title>Larch</title>
        <div className="max-w-3xl mx-auto">
          <LeafNameHeader name="Larch" />
          <div className="flex justify-center">
            <LeafImage src={larchPhoto} alt="Larch_Cartoon.png photo" />
          </div>
          <div className="flex justify-center">
            <PlayAgainButton />
          </div>
          <TangoText text="This is a larch leaf! Unlike pine trees, larch trees lose their needles in the fall!" audio={larchAudio} />
        </div>
      </>
    )
  }

