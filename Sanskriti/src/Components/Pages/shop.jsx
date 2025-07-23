import React from 'react';
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

const products = [
  {
    title: 'Jato (जाँतो)',
    image: jatoImg,
    price: '₨1200',
  },
  {
    title: 'Dhiki (ढिकी)',
    image: dhikiImg,
    price: '₨2500',
  },
  {
    title: 'Halo (हलो)',
    image: haloImg,
    price: '₨1800',
  },
  {
    title: 'Juwa (जुवा)',
    image: juwaImg,
    price: '₨1100',
  },
  {
    title: 'Doko (डोको)',
    image: dokoImg,
    price: '₨600',
  },
  {
    title: 'Dalo (डालो)',
    image: daloImg,
    price: '₨500',
  },
  {
    title: 'Mano (मानो)',
    image: manoImg,
    price: '₨300',
  },
  {
    title: 'Pathi (पाथी)',
    image: pathiImg,
    price: '₨700',
  },
  {
    title: 'Nanglo (नाङ्लो)',
    image: nangloImg,
    price: '₨450',
  },
  {
    title: 'Sukul (सुकुल)',
    image: sukulImg,
    price: '₨800',
  },
  {
    title: 'Ghaito (घैटो)',
    image: ghaitoImg,
    price: '₨550',
  },
  {
    title: 'Ghyampo (घ्याम्पो)',
    image: ghyampoImg,
    price: '₨650',
  },
  {
    title: 'Radi (रादी)',
    image: radiImg,
    price: '₨950',
  },
  {
    title: 'Karuwa (करुवा)',
    image: karuwaImg,
    price: '₨1000',
  },
  {
    title: 'Tuki (टुकी)',
    image: tukiImg,
    price: '₨400',
  },
  {
    title: 'Theki (थेकी)',
    image: thekiImg,
    price: '₨850',
  },
];

const Shop = ({onAddToCart}) => {
  const handleClick = (item) => {
  onAddToCart(item);
  alert(`${item.title} added to cart!`);
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B07A5A] to-[#FFD89A] p-10 gap-10">
      <h1 className="text-4xl font-bold text-center text-amber-950 mb-10 mt-10">Sanskriti Bazar – Shop <p >(Nepal’s Tradition at Your Doorstep)</p></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-30">
        {products.map((item, index) => (
          <div key={index} className=" bg-white/55 p-6 flex flex-col items-center justify-center w-72 h-89 rounded-3xl ">
            <img className="h-48 w-50 rounded-2xl mb-3"  src={item.image} alt={item.title} />
            <h2 className="text-xl font-semibold text-center text-amber-900">{item.title}</h2>
            <p className="text-lg text-amber-800 mt-2">{item.price}</p>
          <button
              className="cursor-pointer mt-4 bg-amber-900 text-white px-5 py-2 rounded-xl hover:bg-amber-800 transition"
              onClick={() =>handleClick(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
