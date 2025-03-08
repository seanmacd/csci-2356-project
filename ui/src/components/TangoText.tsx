import {X} from '@phosphor-icons/react'
import {useState} from 'react'
import {Popover} from 'react-tiny-popover'

import TangoTalk from '../assets/tango-talking.png'

export function TangoText({text}: {text: string}) {
  const [open, setOpen] = useState(true)
  return (
    <Popover
      isOpen={open}
      positions="right"
      content={
        <div className="bg-slate-100 p-4 rounded border ml-2 flex gap-4 justify-between min-w-72">
          <div>{text}</div>
          <button className="bg-slate-100 rounded p-1 cursor-pointer hover:bg-slate-200" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
      }
    >
      <button className="text-4xl" onClick={() => setOpen(true)}>
        <img src={TangoTalk} alt="Tango Talk" />
      </button>
    </Popover>
  )
}
