import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Link, Outlet, useParams } from 'react-router'

import './index.css'
import { Route } from 'react-router'
import { HomePage } from './pages/HomePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

function Layout() {
  return (
    <>
      <div className='min-h-screen'> 
        <Outlet />
      </div>
      <footer className='bg-emerald-800 text-slate-50 p-4 text-center'>The Thinkers Solutions Inc. 2025</footer>
    </>
  )
}

function IdPage() {
  const { id } = useParams<{ id: string }>()

  const map: Record<string, string> = {
    1: 'foo',
    2: 'bar',
    3: 'baz',
  }

  if (!id) {
    return null
  }

  const message = map[id]

  return <div className="bg-green-500 text-slate-50">{message} page!</div>
}
