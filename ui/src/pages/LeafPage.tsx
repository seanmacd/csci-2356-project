import {JSX} from 'react'
import {useParams} from 'react-router'
import { LarchLeafPage } from './leafs/Larch'
import { WhitePineLeafPage } from './leafs/WhitePine'
import { RattlesnakeFernLeafPage } from './leafs/RattlesnakeFern'
import { RedMapleLeafPage } from './leafs/RedMaple'
import { YellowBirchLeafPage } from './leafs/YellowBirch'

const pages: Record<string, JSX.Element> = {
  'yellow-birch': <YellowBirchLeafPage />,
  'larch': <LarchLeafPage />,
  'white-pine': <WhitePineLeafPage />,
  'rattlesnake-fern' : <RattlesnakeFernLeafPage />,
  'red-maple' : <RedMapleLeafPage />
}

export function LeafPage() {
  const {id} = useParams()

  if (!id || !Object.keys(pages).includes(id)) {
    return <div>Page not found</div>
  }

  return pages[id]
}

