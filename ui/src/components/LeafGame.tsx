import { useState } from 'react';
import { Timer } from './Timer';

export function LeafGame() {
  const [timerStarted, setTimerStarted] = useState(false);

  const handleCanvasClick = () => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header and timer in same row */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <Timer startSeconds={30} isActive={timerStarted} />
      </div>

      {/* Canvas */}
      <canvas
        width={400}
        height={400}
        onClick={handleCanvasClick}
        className="border-2 border-gray-500 rounded mt-6"
      />
    </div>
  );
}
