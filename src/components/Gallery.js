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
          <HoverPic
            bw={images.bw3}
            c={images.color3}
            ratio={"3-2"}/>
          <HoverPic
            bw={images.bw5}
            c={images.color5}
            ratio={"1-1"}
          />
          <HoverPic
            bw={images.bw2}
            c={images.color2}
            ratio={"2-3"}
          />
          <HoverPic
            bw={images.bw6}
            c={images.color6}
            ratio={"3-4"}
          />
          <HoverPic
            bw={images.bw1}
            c={images.color1}
            ratio={"2-3"}
          />
          <HoverPic
            bw={images.bw7}
            c={images.color7}
            ratio={"3-4"}
          />
          <HoverPic
            bw={images.bw8}
            c={images.color8}
            ratio={"7-8"}
          />
          <HoverPic
            bw={images.bw4}
            c={images.color4}
            ratio={"2-3"}
          />
          <HoverPic
            bw={images.bw9}
            c={images.color9}
            ratio={"2-3"}
          />
          <HoverPic
            bw={images.bw10}
            c={images.color10}
            ratio={"3-4"}
          />
          <HoverPic
            bw={images.bw11}
            c={images.color11}
            ratio={"2-3"}
          />
          <HoverPic
            bw={images.bw12}
            c={images.color12}
            ratio={"3-4"}
          />
          <HoverPic
            bw={images.bw13}
            c={images.color13}
            ratio={"3-4"}
          />
        </Masonry>
      </div>
    );
  }
}

export default Gallery;
