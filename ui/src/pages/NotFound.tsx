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
        <img src={error} alt="404" className="w-4/5 pt-8"/>
      </div>
      <div className="flex justify-center"></div>
    </>
  )
}
