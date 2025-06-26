import React from 'react'
import { useNavigate } from 'react-router-dom';
import dokoImg from '../../assets/doko.png';
import daloImg from '../../assets/dalo.png';
import pathiImg from '../../assets/pathi.png';
import jatoImg from '../../assets/jato.png';
import haloImg from '../../assets/halo.png';
import ghyampoImg from '../../assets/ghyampo.png';
import sukulImg from '../../assets/sukul.png';
import karuwaImg from '../../assets/karuwa.png';
import manoImg from '../../assets/mano.png';
import juwaImg from '../../assets/juwa.png';
import nangloImg from '../../assets/nanglo.png';
import dhikiImg from '../../assets/dhiki.png';
import ghaitoImg from '../../assets/ghaito.png';
import radiImg from '../../assets/radi.png';
import tukiImg from '../../assets/tuki.png';
import thekiImg from '../../assets/theki.png';
import Flipcard from './flipcard';
const product =[
   {
    title:'Jato (जाँतो)',
    image:jatoImg,
    description:'Stone grinder made from two circular stone.',
    useText:'Used to grind grains like corn, millet, and wheat into flour manually by rotating the top stone.',
    },
     {
    title:'Dhiki (ढिकी)',
    image:dhikiImg,
    description:'Wooden lever system used for pounding grains.',
    useText:'Used in traditional Nepali agriculture to till and prepare the soil before planting.',
    },
         {
    title:'Halo (हलो)',
    image:haloImg,
    description:'A wooden plough, often attached to oxen.',
    useText:'Historically, the doko was used by Nepalese villagers to carry crops, goods, and firewood.',
    },
            {
    title:'Juwa (जुवा)',
    image:juwaImg,
    description:'A wooden yoke used to harness oxen for plowing.',
    useText:'Ties two oxen together. Helps plow fields in traditional farming.',
    },
  {
    title:'Doko (डोको)',
    image:dokoImg,
    description:'Hand woven cone-shaped bamboo basket.',
    useText:'Historically, the doko was used by Nepalese villagers to carry crops, goods, and firewood.',
    },
      {
    title:'Dalo (डालो)',
    image:daloImg,
    description:'A round, shallow bamboo basket with a flat base.',
    useText:' Commonly used to carry grains, vegetables, or fruits—especially during harvests or market visits.',
    },
         {
    title:'Mano (मानो)',
    image:manoImg,
    description:'A traditional Nepali container used to measure grains.',
    useText:'Measuring rice, lentils, and cereals in small scale. Used in markets and homes.',
    },
     
      {
    title:'Pathi (पाथी)',
    image:pathiImg,
    description:' Measuring container made of brass, wood, or bamboo.',
    useText:'Used to measure grains like rice, maize, and wheat. One Pathi is equal to around 4.5 kg of rice..',
    },
  
        {
    title:'Nanglo (नाङ्लो)',
    image:nangloImg,
    description:'A flat, round bamboo tray.',
    useText:'Cleaning rice and grains. Drying vegetables or grains.',
    },
        {
    title:'Sukul (सुकुल)',
    image:sukulImg,
    description:'A straw mat used for flooring.',
    useText:'Lining floors in traditional homes. Used during festivals and ceremonies for sitting.',
    },
        {
    title:'Ghaito (घैटो)',
    image:ghaitoImg,
    description:'A traditional clay or brass water pot.',
    useText:'Used for storing and pouring water. Used in daily and ritual practices.',
    },
        {
    title:'Ghaympo(घ्याम्पो)',
    image:ghyampoImg,
    description:'Container made up of clay or brass.',
    useText:'Used in kitchens and religious rituals for storing water and grains.',
    },
          {
    title:'Radi (रादी)',
    image:radiImg,
    description:'Woolen handmade blanket from sheep or Chyangra wool.',
    useText:'Used as a blanket for warmth in rural homes, or as a floor mat during sleep or prayer. Common in colder regions of Nepal.',
    },
    {
title: 'Karuwa (करुवा)',
  image: karuwaImg,
  description: 'Traditional brass or copper water pitcher with a spout.',
  useText: 'Used to store and pour water, especially during rituals and ceremonies.',
    },
   {
  title: 'Tuki (टुकी)',
  image: tukiImg,
  description: 'Traditional oil lamp made from metal.',
  useText: 'Used for lighting homes before electricity. Also used in puja rituals.',
},
    {
  title: 'Theki (थेकी)',
  image: thekiImg,
  description: 'A wooden or clay vessel used to store milk and curd.',
  useText: 'Traditionally used in rural households to store and ferment milk into curd or butter.',
},
  ]
const Explore = () => {
     const navigate=useNavigate();
  return (<>
    
    <div className='bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] min-h-screen flex flex-wrap justify-center gap-10 p-10'>
       <h1 className='text-4xl font-bold text-center text-amber-950 mb-1 mt-10'>
          Sanskriti Bazar – Explore <br />
       
          (Discover Tools That Tell Stories, hover to know uses) </h1>
           <div className='flex flex-wrap justify-center gap-10 px-10 pb-10'>
      {product.map((items,index)=>(
        <Flipcard key={index} title={items.title} image={items.image} description={items.description} useText={items.useText}/>
      ))}
    </div>
    </div>
    </>
    );
};

export default Explore
