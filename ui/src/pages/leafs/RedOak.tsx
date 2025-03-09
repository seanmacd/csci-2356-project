// sean's page
import { Header } from '../../components/Header'
import {TangoText} from '../../components/TangoText'

export function RedOakLeafPage() {
  return (
    <>
      <title>Red Oak</title>
      <Header />
      <div className="flex justify-center">
        {/* Temp image */}
        <img
          src="https://www.tree-guide.com/images/styles/600x450-copy_/public/northern-red-oak-leaf.jpg?itok=7ntio_26"
          alt="Image of red oak leaf"
        />
      </div>
      <div className="flex justify-center">
        <button>Play Again</button>
      </div>
      <TangoText text="This is a red oak" />
    </>
  )
}
