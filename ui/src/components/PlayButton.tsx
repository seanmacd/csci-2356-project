/**
 * Play button Wenda:
 * When press play it will redirect to where link goes.
 */

export function PlayButton({link}: {link: string}) {
  return (
    <button
      className="bg-green-500 p-1 border-3 border-green-500 rounded-2xl hover:bg-green-800 w-30 h-10 text-white text-1.5xl font-bold"
      onClick={() => (window.location.href = link)} 
    >
      Play
    </button>
  )
}
