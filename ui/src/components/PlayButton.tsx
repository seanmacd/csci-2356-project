{
  /* Create play button component Wenda*/
}

export function PlayButton({link}: {link: string}) {
  return (
    <button
      className="bg-green-500 p-1 border-3 border-green-500 rounded-2xl hover:bg-green-800 w-30 h-10 text-white text-1.5xl font-bold"
      onClick={() => (window.location.href = link)} // Redirects to leaf page link, setup on home page. 
    >
      Play
    </button>
  )
}
