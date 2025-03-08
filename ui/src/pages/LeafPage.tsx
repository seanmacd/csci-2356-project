import {JSX} from 'react'
import {useParams} from 'react-router'
import { LarchLeafPage } from './leafs/Larch'
import { RedMapleLeafPage } from './leafs/RedMaple'
import { YellowBirchLeafPage } from './leafs/YellowBirch'
import { SugarMapleLeafPage } from './leafs/SugarMaple'
import { RedOakLeafPage } from './leafs/RedOak'

const pages: Record<string, JSX.Element> = {
  'yellow-birch': <YellowBirchLeafPage />,
  'larch': <LarchLeafPage />,
  'red-oak': <RedOakLeafPage />,
  'sugar-maple' : <SugarMapleLeafPage />,
  'red-maple' : <RedMapleLeafPage />
}

export function LeafPage() {
  const {id} = useParams()

  if (!id || !Object.keys(pages).includes(id)) {
    return <div>Page not found</div>
  }

  return pages[id]
}

