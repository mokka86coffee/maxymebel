import React, {Component, Fragment} from 'react';

function DimensionsText ({ chosenComponent, current, picClicked }) {

  switch ( chosenComponent ) {
    case 'Chairs': 
          return (
           <div className={picClicked ? 'invis chairs__freim__info__dimensions' : 'chairs__freim__info__dimensions'}>
              <h5>Размеры:</h5> 
              <div className="dimensions__text">
                <p><b>Высота:</b><em> {current.params.height}</em></p>
                <p><b>Ширина:</b><em> {current.params.width}</em></p>
                <p><b>Глубина:</b><em> {current.params.depth}</em></p>
                <p><b>Вес:</b><em> {current.params.weight}</em></p>
              </div>
           </div>
          );
    case 'Tables':
          return (
           <div className={picClicked ? 'invis chairs__freim__info__dimensions' : 'chairs__freim__info__dimensions'}>
              <h5>Размеры(ДхШхВ):</h5> 
              <div className="dimensions__text">
                <p style={current.params.height ? {} : {display: 'none'}}><b>Вариант:</b><em> {current.params.height}</em></p>
                <p style={current.params.width ? {} : {display: 'none'}}><b>Вариант:</b><em> {current.params.width}</em></p>
                <p style={current.params.depth ? {} : {display: 'none'}}><b>Вариант:</b><em> {current.params.depth}</em></p>
                <p style={current.params.weight ? {} : {display: 'none'}}><b>Вариант:</b><em> {current.params.depth}</em></p>
              </div>
           </div>
          );
  }

}

export default DimensionsText;