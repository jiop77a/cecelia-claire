import React from 'react';
import {images} from '../imageIndex.js';
import HoverPic from './HoverPic.js';
import '../css/Gallery.css';
import Masonry from 'react-mason';


class Gallery extends React.Component {

  state = {width: 0}

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    console.log(window.innerWidth);
    let width = window.innerWidth;
    this.setState({width});
  }

  render() {
    let {width} = this.state;

    let calcMarg = () => {

    };

    return (
      <div className='gallery' style={{marginLeft: ''}}>
        <Masonry>
          <HoverPic bw={images.bw3} c={images.color3} long={true}/>
          <HoverPic bw={images.bw1} c={images.color1}/>
          <HoverPic bw={images.bw2} c={images.color2}/>
          <HoverPic bw={images.bw4} c={images.color4}/>
        </Masonry>
      </div>
    );
  }
}

export default Gallery;
