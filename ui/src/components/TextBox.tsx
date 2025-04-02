import {SpeakerHigh} from '@phosphor-icons/react'

/**
 * Textbox for tango to tell user anything we want. 
 * 
 * @authors Sean
 */
type TextBoxProps = {
  image : string
  imageAltText: string
  headerText : string
  subText : string
  audioSrc: string
}

export function TextBox({image, imageAltText, headerText, subText, audioSrc}: TextBoxProps) {
  return (
    <div className='p-6'>
      <div className="flex items-center space-x-4">
        <div>
          <img src={image} alt={imageAltText} className="w-full" />
        </div>
        <div className="bg-green-800 rounded-2xl">
          <h2 className="text-white text-xl font-bold mb-2 p-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{headerText}</span>
              <button onClick={() => new Audio(audioSrc).play()}>
                <SpeakerHigh size={16} weight="fill" className='text-white'></SpeakerHigh>
              </button>
            </div>
          </h2>
          <p className="text-white text-sm p-2">{subText}</p>
        </div>
      </div>
    </div>
  )
}