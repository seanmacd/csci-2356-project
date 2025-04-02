import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import TangoTalk from '@/assets/tangoPhotos/tango-talking.png'
import {PlayAudio} from './PlayAudio'

/**
 * TangoText Sean:
 * Image of tango with a chat bubble of text. Also has audio to play what text says as long as implemented.
 * 
 * @authors Sean
 */

export function TangoText({text, audio}: {text: string; audio: string}) {
  return (
    <div>
      <Popover>
        <PopoverButton className="outline-none">
          <img src={TangoTalk} alt="Tango Talk" className="w-32" />
        </PopoverButton>
        <PopoverPanel
          anchor="right"
          className="relative bg-white py-6 px-4 rounded-3xl border-2 border-amber-950 ml-2 flex gap-4 justify-between font-bold text-amber-950"
        >
          {text}
        </PopoverPanel>
      </Popover>
      <PlayAudio src={audio} />
    </div>
  )
}
