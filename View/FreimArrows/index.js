import React from 'react';

function FreimArrows (props) {
          const { sliderChngId, sliderChng } = props;

          return (
               <div className="chairs__freim__arrows">
                    <div 
                      className={sliderChngId==1 ? "arrow arrow--left arrow--disabled " : "arrow arrow--left"}
                      onClick={e=>sliderChng(1)}
                     >
                     </div>
                    <div 
                      className={sliderChngId==2 ? "arrow arrow--right arrow--disabled " : "arrow arrow--right"}
                      onClick={e=>sliderChng(2)}
                    >
                    </div>
               </div>
          )

}

export default FreimArrows;