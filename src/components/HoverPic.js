import React from 'react';
import '../css/HoverPic.css';

export default function ({bw, c, ratio}) {
  return (
    <div className={`pic ${ratio}`}>
      <img className="bw" src={bw}></img>
      <img className="c" src={c}></img>
    </div>
  );
}
