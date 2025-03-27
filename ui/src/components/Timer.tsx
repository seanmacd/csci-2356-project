import { useEffect, useState } from 'react';

type CountdownTimerProps = {
  startSeconds: number;
  isActive: boolean;
  onComplete?: () => void;
  onTimeUpdate?: (secondsLeft: number) => void
};

export function Timer({ startSeconds, isActive, onComplete, onTimeUpdate }: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(startSeconds);

  useEffect(() => {
    let interval: number | null = null;

    if (isActive && seconds > 0) {
      interval = window.setInterval(() => {
        setSeconds(prev => {
          const next = prev - 1
      
          if (onTimeUpdate) {
            onTimeUpdate(next)
          }
      
          if (next <= 0) {
            if (onComplete) onComplete()
            clearInterval(interval!)
          }
      
          return next
        })
      }, 1000)
      
    }

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isActive, seconds, onComplete]);

  useEffect(() => {
    if (!isActive) {
      setSeconds(startSeconds);
    }
  }, [isActive, startSeconds]);

  return (
    <div className="bg-amber-800 text-white font-mono font-bold px-6 py-3 rounded-xl text-2xl">
      {seconds}s
    </div>
  );
}
