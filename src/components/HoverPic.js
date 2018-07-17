import React from 'react';
import '../css/HoverPic.css';

<<<<<<< HEAD
export default function ({bw, c, ratio}) {
  return (
    <div className={`pic pic-${ratio}`}>
=======
export default function ({bw, c, long}) {
  return (
    <div className={long ? 'l-pic' : 'pic'}>
>>>>>>> masonry
      <img className="bw" src={bw}></img>
      <img className="c" src={c}></img>
    </div>
  );
}
