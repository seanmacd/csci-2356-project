/**
 * Create header component Connor
 * 
 * No longer used, was used in Phase 1. 
 */

type HeaderProps = {
  name: string
}

export function LeafNameHeader({name} : HeaderProps ) {
  return (
    <div className="flex justify-center">
    <header className="bg-amber-950 p-4 text-center text-white font-bold text-lg rounded-xl flex items-center w-4/10 -mt-3">
      <span className="flex-1">{name}</span>
    </header>
    </div>
  )
}
