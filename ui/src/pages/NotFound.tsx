import error from '@/assets/404-Tango.png'
import {Header} from '@/components'

{
  /* Connor*/
}

export function NotFound() {
  // TODO: add and style 404 page content
  return (
    <>
      <title>Red Maple</title>
      <Header />
      <div className="flex justify-center">
        <img src={error} alt="404" className="w-4/5 pt-8" />
      </div>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-black">Error: Page Not Found</h2>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-500 p-1 border-3 border-green-800 rounded-2xl hover:bg-green-800 w-30 h-10 text-white text-1.5xl font-bold mt-4"
          onClick={() => (window.location.href = '/')}
        >
          {' '}
          Home{' '}
        </button>{' '}
      </div>
    </>
  )
}
