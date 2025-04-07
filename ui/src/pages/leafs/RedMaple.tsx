import HowToPlayAudio from '@/assets/audio/HowToPlay.mp3'
import redMaple from '@/assets/leafPhotos/RedMaple_Cartoon.png';
import DrawBugs from '@/components/DrawBugs';
import Tango from '@/assets/tangoPhotos/tango-talking.png'
import {TextBox} from '@/components'



/**
 * Connor's page
 * Implements components for the button, header, tango bubble, and uses imported image and audio. 
 */

const bugPositions: [number, number][] = [
  [181, 20],
  [230, 80],
  [330, 95],
  [130, 80],
  [30, 95],
  [105, 300],
  [265, 300],
  [45, 190],
  [320, 190],
  

]


export function RedMapleLeafPage() {
  return (
    <>
      <title>Red Maple Game</title>
      <div className="flex justify-center">
        <DrawBugs
          canvasId="redMaple"
          leafImageSrc={redMaple}
          bugPositions={bugPositions}
        />
      </div>
      <TextBox
      image={Tango} 
      imageAltText='Tango the fox' 
      headerText='How To Play?' 
      subText='Click the bug to begin the game. Clear all the bugs within 15 seconds and I will reward you with some acorns!'
      audioSrc={HowToPlayAudio}
      ></TextBox>

    </>
  );
}
