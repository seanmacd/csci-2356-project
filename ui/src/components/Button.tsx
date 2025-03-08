{/* Create button component Wenda*/}

export function Button()
{
  return (
    <button className="bg-green-500 p-4 border-4 border-green-950 rounded-2xl hover:bg-green-700" onClick={() => window.location.href = '/'}> Play Again </button>
  )
}