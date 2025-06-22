import React from 'react'
import { useNavigate } from 'react-router-dom';
import dokoImg from '../../assets/doko.png';
import daloImg from '../../assets/dalo.png';
import pathiImg from '../../assets/pathi.png';
import jatoImg from '../../assets/jato.png';
import haloImg from '../../assets/halo.png';
import dhikiImg from '../../assets/dhiki.png';
import Flipcard from './flipcard';
const product =[
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
    title:'Pathi (पाथी)',
    image:pathiImg,
    description:' Measuring container made of brass, wood, or bamboo.',
    useText:'Used to measure grains like rice, maize, and wheat. One Pathi is equal to around 4.5 kg of rice..',
    },
      {
    title:'Jato (जाँतो)',
    image:jatoImg,
    description:'Stone grinder made from two circular stone.',
    useText:'Used to grind grains like corn, millet, and wheat into flour manually by rotating the top stone.',
    },
      {
    title:'Halo (हलो)',
    image:haloImg,
    description:'A wooden plough, often attached to oxen.',
    useText:'Historically, the doko was used by Nepalese villagers to carry crops, goods, and firewood.',
    },
    {
    title:'Dhiki (ढिकी)',
    image:dhikiImg,
    description:'Wooden lever system used for pounding grains.',
    useText:'Used in traditional Nepali agriculture to till and prepare the soil before planting.',
    },
  ]
const Explore = () => {
     const navigate=useNavigate();
  return (
    <div className='bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] min-h-screen flex flex-wrap justify-center gap-10 p-10'>
      {product.map((items,index)=>(
        <Flipcard key={index} title={items.title} image={items.image} description={items.description} useText={items.useText}/>
      ))}
    </div>
    );
};

export default Explore
