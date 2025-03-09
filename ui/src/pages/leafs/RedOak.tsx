// sean's page
import {Button, Header, TangoText} from '@/components'

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
        <Button />
      </div>
      <TangoText
        text="This is a red oak.
       Scientific Classification & Common Name: The northern red oak (Quercus rubra) is a deciduous tree native to North America.
      "
      />
    </>
  )
}
