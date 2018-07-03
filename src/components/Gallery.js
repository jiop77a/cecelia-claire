import React from 'react';
import {images} from '../imageIndex.js';
import HoverPic from './HoverPic.js';
import '../css/Gallery.css';


export default function () {
  return (
    <div className='gallery'>
      <HoverPic bw={images.bw1} c={images.color1}/>
      <HoverPic bw={images.gal2} c={images.butt}/>
      <HoverPic bw={images.gal3} c={images.butt}/>
      <HoverPic bw={images.gal4} c={images.butt}/>
      <HoverPic bw={images.gal5} c={images.butt}/>
      <HoverPic bw={images.gal6} c={images.butt}/>
      <HoverPic bw={images.gal7} c={images.butt}/>
      <HoverPic bw={images.gal8} c={images.butt}/>
      <HoverPic bw={images.gal9} c={images.butt}/>
      <HoverPic bw={images.gal9} c={images.butt}/>
      <HoverPic bw={images.gal9} c={images.butt}/>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
    </div>
  );
}
