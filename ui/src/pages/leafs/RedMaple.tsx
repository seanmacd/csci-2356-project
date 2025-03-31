import redMapleAudio from '@/assets/audio/Red-Maple.mp3';
import redMaple from '@/assets/leafPhotos/RedMaple_Cartoon.png';
import { TangoText } from '@/components';
import DrawBugs from '@/components/DrawBugs';

/**
 * Connor's page
 * Implements components for the button, header, tango bubble, and uses imported image and audio. 
 */

const bugPositions: [number, number][] = [
  [181, 20],
  [230, 80],
  [330, 95],
  [320, 250],
  [130, 80],
  [30, 95],
  [40, 250],
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
      <TangoText text="This is a red maple tree leaf, its on the Canadian flag!" audio={redMapleAudio} />

    </>
  );
}
