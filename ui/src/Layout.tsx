import {Outlet} from 'react-router'

import Icon from '@/assets/otherPhotos/icon.svg'
import homeIcon from '@/assets/otherPhotos/homeIconWhite.svg'
import {House} from '@phosphor-icons/react'


export function Layout() {
  return (
    <div>
      <div className="min-h-screen bg-orange-100 p-8">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-amber-950 p-4 text-center text-white font-bold text-2xl rounded-xl flex items-center mb-8">
      <img src={Icon} className="w-10" />
      <span className="flex-1">Tango Tree Leaf Game</span>
      <button onClick={() => (window.location.href = '/')}>
                <House size={32} />
        </button>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-amber-950 text-slate-50 p-4">
      <div className="flex justify-between">
        <div className="text-left font-bold">
          <p>St. Margaret's Bay Area</p>
          <p>Woodland Conservation</p>
        </div>
        <div className="text-right font-bold">
          <p>Contact</p>
          <p>(902)-555-1234</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} St. Margaret's Bay Area Woodland Conservation Site & Saint Mary's
          University, Halifax, NS
        </p>
      </div>
    </footer>
  )
}
