

{
  /* Create header component Connor*/
}

type HeaderProps = {
  name: string
}

export function LeafNameHeader({name} : HeaderProps ) {
  return (
    <div className="flex justify-center">
    <header className="bg-amber-950 p-4 text-center text-white font-bold text-2xl rounded-xl flex items-center w-1/2">
      <span className="flex-1">{name}</span>
    </header>
    </div>
  )
}
