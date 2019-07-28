import React, {Component, Fragment} from 'react';
export default function DopPhotosInsideFreim (props) {

  const { invisible, src, chosenComponent, dopSliderClick } = props;

  const dopPhoto1 = {backgroundImage: `url(img/${chosenComponent}/${src}/dop${src}1.jpg)`};
  const dopPhoto2 = {backgroundImage: `url(img/${chosenComponent}/${src}/dop${src}2.jpg)`};

  return (
     <div className={invisible ? 'invis dop_photos' : 'dop_photos'}>
          <div 
            className="dop_photos__photo dop_photos__photo1"
            onClick={e=>dopSliderClick(src, 1)}
            style={dopPhoto1}
          >
          </div>
          <div 
            className="dop_photos__photo dop_photos__photo1"
            onClick={e=>dopSliderClick(src, 2)}
            style={dopPhoto2}
          >
          </div>
     </div>
  )
}