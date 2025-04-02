import {useNavigate} from 'react-router'
import Larch from '@/assets/leafPhotos/Larch_Real.png'
import RedMapleLeaf from '@/assets/leafPhotos/RedMaple_Real.png'
import RedOak from '@/assets/leafPhotos/RedOak_Real.png'
import SugarMaple from '@/assets/leafPhotos/SugarMaple_Real.png'
import YellowBirch from '@/assets/leafPhotos/YellowBirch_Real.png'
import {Button} from '@/components/Button'
import {Difficulty} from '@/components/Difficulty'


/**
 * LeadCard:
 * Displays the name, leaf image, description/fact, and button to redirect to its respective page. 
 * 
 * @authors Wenda, Sean, Connor
 */

const images = {RedMapleLeaf, RedOak, SugarMaple, Larch, YellowBirch}

export type LeafCardImage = keyof typeof images

export type LeafCardProps = {
  name: string
  description: string
  image: LeafCardImage
  href: string
  difficulty: number
}

export function LeafCard({name, description, image, href, difficulty}: LeafCardProps) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border-2">
      <div className="bg-white flex-1 p-4">
        <img src={images[image]} alt={name} className="w-full" />
      </div>
      <div className="flex flex-col gap-4 justify-between bg-amber-950 text-white p-4 flex-1">
        <div>
          <h2 className="text-xl font-bold">
            <div className="flex justify-between">
              <div className="text-left">{name}</div>
              <div className="text-right">
                <Difficulty difficulty={difficulty}></Difficulty>
              </div>
            </div>
          </h2>
          <p className="text-sm ">{description}</p>
        </div>
        <Button onClick={() => navigate(href)}>Play</Button>
      </div>
    </div>
  )
}
