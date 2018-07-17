import React from 'react';
import '../css/HoverPic.css';

export default function ({image}) {
  return (
    <div className="pic">
      <img className="bw" src={image.bw}></img>
      <img className="c" src={image.color}></img>
    </div>
  );
}
