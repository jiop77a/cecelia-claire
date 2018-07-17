import React from 'react';
import {images} from '../imageIndex.js';
import HoverPic from './HoverPic.js';
import '../css/Gallery.css';
import Masonry from 'react-masonry-component';


const Gallery = () => (
        <Masonry className={"gallery"} options={{transitionDuration: 200}}>
          <HoverPic image={images.laying}/>
          <HoverPic image={images.palms}/>
          <HoverPic image={images.garden}/>
          <HoverPic image={images.lemoncouch}/>
          <HoverPic image={images.hero}/>
          <HoverPic image={images.peach}/>
          <HoverPic image={images.wispie}/>
          <HoverPic image={images.leaning}/>
          <HoverPic image={images.peonies}/>
          <HoverPic image={images.tropisueno}/>
          <HoverPic image={images.bagprint}/>
          <HoverPic image={images.poptrop}/>
          <HoverPic image={images.blueandwhite}/>
        </Masonry>
);

export default Gallery;
