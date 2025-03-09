import {StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router'

import {Footer} from '@/components'
import {HomePage, LeafPage, NotFound} from '@/pages'

import './index.css'
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
      <div className="min-h-screen bg-orange-100">
        <Outlet />
      </div>
      <Footer />
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
