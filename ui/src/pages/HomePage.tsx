import { WelcomeSection } from '@/components'
import type {LeafCardProps} from '@/components/LeafCard'

import {LeafCard} from '@/components/LeafCard'

/*
 *  TODO: Add Header component, create and add LeafSelector comonent,
 *  add TangoText comonent to tell to user how to select a leaf,
 *  add footer comonent
 */

export function HomePage() {
  const leafCardData: LeafCardProps[] = [
    {
      name: 'Red Maple',
      description: 'This is a Red Maple Leaf! Their leaves can turn bright red, yellow, or even orange!',
      image: 'RedMapleLeaf',
      href: '/leaf/red-maple'
    },
    {
      name: 'Yellow Birch',
      description: 'This is a coastal yellow birch leaf! Did you know their twigs smell like minty gum?',
      image: 'YellowBirch',
      href: '/leaf/yellow-birch'
    },
    {
      name: 'Sugar Maple',
      description: 'This is a sugar maple leaf! Did you know this tree is where maple syrup comes from?',
      image: 'SugarMaple',
      href: '/leaf/sugar-maple'
    },
    {
      name: 'Red Oak',
      description: 'This is a red oak leaf! Did you know they can live for 500 years?',
      image: 'RedOak',
      href: '/leaf/red-oak'
    },
    {
      name: 'Larch',
      description: 'This is a larch leaf! Unlike pine trees, larch trees lose their needles in the fall!',
      image: 'Larch',
      href: '/leaf/larch'
    }
  ]

  const leafCards = leafCardData.map(({name, description, image, href}) => (
    <LeafCard key={name} name={name} description={description} image={image} href={href} />
  ))

  return (
    <div> 
      <WelcomeSection />
  <div className="flex flex-col gap-8">{leafCards}</div>
  </div>
)
}
