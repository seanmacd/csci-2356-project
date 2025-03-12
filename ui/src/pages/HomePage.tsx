{
  /* TODO: Add Header component, create and add LeafSelector comonent,
    add TangoText comonent to tell to user how to select a leaf,
    add footer comonent */
}

import Redoak from '@/assets/audio/redoak.mp3'
import { LeafCard } from "@/components/LeafCard"
import { Header, HomeTangoText } from "@/components"
import { LeafNameHeader } from "@/components"


export function HomePage() {
  return <div>
    <Header></Header>
    <LeafNameHeader name="Home Page"/>

    <HomeTangoText text="Explore and choose a leaf, press play to begin the game!" audio={Redoak} />
    
    <div className="my-2">
    <LeafCard 
      name="Red Maple" 
      description="This is a Red Maple Leaf! Their leaves can turn bright red, yellow, or even orange!" 
      image="RedMapleLeaf" 
      redirLink="/leaf/red-maple"/>

    <LeafCard 
      name="Yellow Birch" 
      description="This is a coastal yellow birch leaf! Did you know their twigs smell like minty gum?" 
      image="YellowBirch" 
      redirLink="/leaf/yellow-birch" />

    <LeafCard 
      name="Sugar Maple" 
      description="This is a sugar maple leaf! Did you know this tree is where maple syrup comes from?" 
      image="SugarMaple" 
      redirLink="/leaf/sugar-maple"/>

    <LeafCard 
      name="Red Oak" 
      description="This is a red oak leaf! Did you know they can live for 500 years?" 
      image="RedOak" 
      redirLink="/leaf/red-oak"/>

    <LeafCard 
      name="Larch" 
      description="This is a larch leaf! Unlike pine trees, larch trees lose their needles in the fall!" 
      image="Larch" 
      redirLink="/leaf/larch"/>
    </div>
  
  </div>
}
