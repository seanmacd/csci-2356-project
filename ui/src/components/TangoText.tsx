import {X} from '@phosphor-icons/react'
import {useState} from 'react'
import {Popover} from 'react-tiny-popover'

import TangoTalk from '@/assets/tangoPhotos/tango-talking.png'
import { PlayAudio } from './PlayAudio'

export function TangoText({text, audio}: {text: string, audio: string}) {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Popover
        isOpen={open}
        positions="right"
        content={
          <div className="bg-white py-6 px-4 rounded-3xl border-2 border-amber-950 ml-2 flex gap-4 justify-between w-[50vw]">
            <div className="font-bold text-amber-950 relative">
              {text}
              <button
                className="fixed top-0 right-0 bg-white rounded-full border-2 p-1 translate-x-1/4 -translate-y-1/4"
                onClick={() => setOpen(false)}
              >
                <X weight="bold" size={20} />
              </button>
            </div>
          </div>
        }
      >
        <button className="text-4xl" onClick={() => setOpen(true)}>
          <img src={TangoTalk} alt="Tango Talk" className="w-[35vw]" />
        </button>
      </Popover>
      <PlayAudio src={audio} />
    </div>
  )
}
