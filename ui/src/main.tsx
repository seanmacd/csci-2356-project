import {StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Outlet, Routes, useParams} from 'react-router'

import './index.css'

import {Route} from 'react-router'

import {HomePage} from './pages/HomePage'
import {LeafPage} from './pages/LeafPage'
import {NotFound} from './pages/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/leaf/:id" element={<LeafPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

function Layout() {
  return (
    <>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <footer className="bg-emerald-800 text-slate-50 p-4 text-center">The Thinkers Solutions Inc. 2025</footer>
    </>
  )
}

function DemoPage() {
  const [count, setCount] = useState<number>(1)

  return (
    <div>
      <div className="bg-green-500">Demo page! The count is: {count}</div>
      <button className="bg-amber-400 rounded p-4" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </div>
  )
}


