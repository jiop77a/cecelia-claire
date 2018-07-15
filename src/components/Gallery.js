import React from 'react';
import {images} from '../imageIndex.js';
import HoverPic from './HoverPic.js';
import '../css/Gallery.css';


export default function () {
  return (
    <div className='gallery'>
      <HoverPic
        bw={images.bw1}
        c={images.color1}
        ratio={"pic-2-3"}
      />
      <HoverPic
        bw={images.bw2}
        c={images.color2}
        ratio={"pic-2-3"}
      />
      <HoverPic
        bw={images.bw3}
        c={images.color3}
        ratio={"pic-3-2"}/>
      <HoverPic
        bw={images.bw4}
        c={images.color4}
        ratio={"pic-2-3"}
      />
      <div className="filler"></div>
      <div className="filler"></div>
      <div className="filler"></div>
    </div>
  );
}
