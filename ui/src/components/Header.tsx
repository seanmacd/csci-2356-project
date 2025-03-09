import Icon from '../assets/icon.svg'

{
  /* Create header component Sean*/
}

export function Header() {
  return (
    <header className="bg-amber-950 p-4 text-center text-white font-bold text-2xl m-6 rounded-xl flex items-center">
      <img src={Icon} className="w-10" />
      <span className="flex-1">Game Name</span>
      <span className="w-10"></span>
    </header>
  )
}
