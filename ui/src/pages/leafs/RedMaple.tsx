// Connor's page
// Implements components for the button, header, tango bubble, and uses imported image and audio. 

import redMapleAudio from '@/assets/audio/Red-Maple.mp3';
import redMaple from '@/assets/leafPhotos/RedMaple_Cartoon.png';
import { PlayAgainButton, TangoText } from '@/components';
import { LeafNameHeader } from '@/components/LeafNameHeader';
import { LeafGame } from '@/components/LeafGame';
import DrawBugs from '@/components/DrawBugs';

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
]


export function RedMapleLeafPage() {
  return (
    <>
      <title>Red Maple</title>
      <LeafNameHeader name="Red Maple" />
      <div className="mt-8">
      <LeafGame />

      </div>
      <div className="flex justify-center">

          <DrawBugs
            canvasId="redMaple"
            leafImageSrc={redMaple}
            bugPositions={bugPositions}
          />
      </div>
      <div className="flex justify-center">
        <PlayAgainButton />
      </div>
      <TangoText text="This is a red maple tree leaf, its on the Canadian flag!" audio={redMapleAudio} />

    </>
  );
}
