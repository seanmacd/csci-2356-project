import { TextBox} from '@/components'
import type {LeafCardProps} from '@/components/LeafCard'

import Tango from '@/assets/tangoPhotos/TangoExcitedRight.png'
import Welcome from '@/assets/audio/Welcome.mp3'

import {LeafCard} from '@/components/LeafCard'

/*
 *  Home page:
 *  Uses LeafCardProp to create its own individual element for each leaf along with the Welcome section. 
 */

export function HomePage() {
  const leafCardData: LeafCardProps[] = [
    {
      name: 'Red Maple',
      description: 'This is a Red Maple Leaf! Their leaves can turn bright red, yellow, or even orange!',
      image: 'RedMapleLeaf',
      href: '/leaf/red-maple',
      difficulty: 1
    },
    {
      name: 'Yellow Birch',
      description: 'This is a coastal yellow birch leaf! Did you know their twigs smell like minty gum?',
      image: 'YellowBirch',
      href: '/leaf/yellow-birch',
      difficulty: 1
    },
    {
      name: 'Sugar Maple',
      description: 'This is a sugar maple leaf! Did you know this tree is where maple syrup comes from?',
      image: 'SugarMaple',
      href: '/leaf/sugar-maple',
      difficulty: 2
    },
    {
      name: 'Red Oak',
      description: 'This is a red oak leaf! Did you know they can live for 500 years?',
      image: 'RedOak',
      href: '/leaf/red-oak',
      difficulty: 2
    },
    {
      name: 'Larch',
      description: 'This is a larch leaf! Unlike pine trees, larch trees lose their needles in the fall!',
      image: 'Larch',
      href: '/leaf/larch',
      difficulty: 3
    }
  ]

  const leafCards = leafCardData.map(({name, description, image, href, difficulty}) => (
    <LeafCard key={name} name={name} description={description} image={image} href={href} difficulty={difficulty}/>
  ))

  return (
    <div> 
      <TextBox 
      image={Tango} 
      imageAltText='Tango the fox' 
      headerText='Welcome!' 
      subText='Hello! I am tango the trail fox, this is my tree leaf game. Explore and select one of the leaves to begin playing!'
      audioSrc={Welcome}
      ></TextBox>
  <div className="flex flex-col gap-8">{leafCards}</div>
  </div>
)
}
