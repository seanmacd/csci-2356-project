import {SpeakerHigh} from '@phosphor-icons/react'

/**
 * PlayAudio:
 * Playing audio src. 
 * 
 * @authors Sean
 */

type AudioSource = {
  src: string
}

export function PlayAudio({src}: AudioSource) {
  return (
    <div className="flex justify-center">
        <button onClick={() => new Audio(src).play()}>
          <SpeakerHigh size={48} weight="fill" className='text-amber-950'/>
        </button>
      </div>
  )
}
