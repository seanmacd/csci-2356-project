import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { House, ArrowClockwise } from '@phosphor-icons/react'
import { useState } from 'react'
import AcornColoured from '@/assets/otherPhotos/acornColoured.png'
import AcornUncoloured from '@/assets/otherPhotos/acornUncoloured.png'

type GameModalProps = {
  score: string
  Highscore: string
}

export function GameModal({score, Highscore}: GameModalProps) {
  let [isOpen, setIsOpen] = useState(true)

  const scoreNum = parseInt(score)

  let acornImages

  if (scoreNum >= 15) {
    acornImages = [AcornColoured, AcornColoured, AcornColoured]
  } else if (scoreNum >= 10) {
    acornImages = [AcornColoured, AcornColoured, AcornUncoloured]
  } else if (scoreNum >= 1) {
    acornImages = [AcornColoured, AcornUncoloured, AcornUncoloured]
  } else {
    acornImages = [AcornUncoloured, AcornUncoloured, AcornUncoloured]
  }

  let completion;

  if (scoreNum === 0) {
    completion = "FAILED!"
  } else {
    completion = "COMPLETE!"
  }

  return(
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border-amber-950 border-6 rounded-2xl bg-white p-12">
            <div className="flex justify-center">
              {acornImages.map((image, index) => (
              <img key={index} src={image} alt="Acorn" className="w-32 h-32" />
              ))}
            </div>
            <DialogTitle className="font-bold">
              <div className='text-amber-950 text-4xl flex justify-center'>{completion}</div>
            </DialogTitle>
            <Description>
                <div className='bg-stone-200 text-amber-950 font-bold rounded-2xl p-3 flex justify-between'>
                <div className='text-left'>
                  Score: <br /> High Score:
                </div>
                <div className='text-right'>
                  {score} <br /> {Highscore}
                </div>
                </div>
            </Description>
            <div className="flex justify-center gap-8">
                <button onClick={() => window.location.reload()}>
                <ArrowClockwise size={64} className='bg-amber-950 text-white rounded-2xl p-1'/>
                </button>
              <button onClick={() => window.location.href = '/'}>
                <House size={64} className='bg-amber-950 text-white rounded-2xl p-1'/>
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}