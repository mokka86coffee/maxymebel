import React, { Component } from 'react';

function PokrasList ({ pokrasInfoShow, nanesName, tkaniChoose, chosenComponent }) {
	return (
     <div className="pokras">
         <div 
         	className={nanesName==='std' ? "clicked var var1" : "var var1"}
         	onClick={()=>pokrasInfoShow('std')}
         >
         </div>
         <div 
         	className={nanesName==='nostd' ? "clicked var var2" : "var var2"}
         	onClick={()=>pokrasInfoShow('nostd')}
         >
         </div>
         <div 
          className={nanesName==='pat' ? "clicked var var3" : "var var3"}
          onClick={()=>pokrasInfoShow('pat')}
         >
         </div>
         <div 
          className={nanesName==='tkani' ? "clicked var tkani" : "var tkani"}
          style = { chosenComponent == 'Tables' ? { display: 'none' } : { display: 'block' } }
          onClick={()=>tkaniChoose()}
         >
         </div>
     </div>
	)
}

export default PokrasList;