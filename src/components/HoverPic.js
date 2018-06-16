import React from 'react';
import '../css/HoverPic.css';

export default function ({bw, c}) {
  return (
    <div className="pic">
      <img className="bw" src={bw}></img>
      <img className="c" src={c}></img>
    </div>
  );
}
