{
  /* Create play again button component Wenda*/
}

export function PlayAgainButton() {
  return (
    <button
      className="bg-green-500 p-2 border-3 border-green-950 rounded-2xl hover:bg-green-800 w-40 text-white text-2xl font-bold project_font"
      onClick={() => (window.location.href = '/')} // Redirects to the home page
    >
      {' '}
      Play Again{' '}
    </button>
  )
}

export default PlayAgainButton