import {JSX} from 'react'
import {useParams} from 'react-router'

import {LarchLeafPage, RedMapleLeafPage, RedOakLeafPage, SugarMapleLeafPage, YellowBirchLeafPage} from '@/pages/leafs'

const pages: Record<string, JSX.Element> = {
  'yellow-birch': <YellowBirchLeafPage />,
  larch: <LarchLeafPage />,
  'red-oak': <RedOakLeafPage />,
  'sugar-maple': <SugarMapleLeafPage />,
  'red-maple': <RedMapleLeafPage />
}

export function LeafPage() {
  const {id} = useParams()

  if (!id || !Object.keys(pages).includes(id)) {
    return <div>Page not found</div>
  }

  return pages[id]
}
