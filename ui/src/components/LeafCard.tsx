{
    /* Create LeafCard component Wenda*/
}

import RedMapleLeaf  from "@/assets/Red-Maple-Photoroom.png";
import RedOak from "@/assets/Red-Oak-Photoroom.png";
import SugarMaple from "@/assets/Sugar-Maple-Photoroom.png";
import YellowBirch from "@/assets/Yellow-Birch-Photoroom.png";
import Larch from "@/assets/Larch-Photoroom.png";
import {PlayButton} from '@/components';
import TangoBust from '@/assets/TangoBust.png';

const images = {RedMapleLeaf, RedOak, SugarMaple, Larch, YellowBirch};

type LeafImage = keyof typeof images;

interface Details {
    name: string;
    description: string;
    image: LeafImage;
    redirLink: string;
}

export function LeafCard({name, description, image, redirLink}: Details) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center w-85 h-40 m-4">

                <div className="box-border border-2 bg-amber-950 rounded-2xl w-85 h-40"></div>

                <div className="absolute top- left-0 box-border border-2 bg-white rounded-2xl w-30 h-45 transform -translate-x6 -translate-y-.5">
                    <img src={images[image]} alt={name} className="my-7"/> 
                </div>

                <div className="absolute top- right-0 box-border rounded-2xl w-50 h-45 transform -translate-x-3 translate-y-5">
                    <h2 className="text-2xl font-bold text-white">{name}</h2>
                </div>

                <div className="absolute top- right-0 box-border rounded-2xl w-50 h-45 transform -translate-x-3 translate-y-15">
                    <h3 className="text-sm text-white -my-3">{description}</h3>
                </div>

                <div className="absolute top- right-0 box-border rounded-2xl w-50 h-45 transform -translate-x-3 translate-y-29.5">
                    <PlayButton link={redirLink} />
                </div>

                <div className="absolute top- right-0 box-border rounded-2xl w-50 h-45 transform translate-x-29 translate-y-20">
                    <img src={TangoBust} alt="Tango" className="w-20"/>
                </div>


            </div>
            </div>
    );

}

/**
 * <img src={images[image]} alt={name} className="w-1/2"/>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-lg">{description}</p>
 */