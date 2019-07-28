import React, {Component} from 'react';

import FetchData from '../../Data/FetchData';

export default class PokrasFull extends Component {

	constructor (props) {
		super(props);
	    this.nanesChngdTimeout = '';
	    this.state = {
	   	    version: '1',

  			nanesName: this.props.nanesNewName,
  			nanesChngd: false,

  			pat: [],
  			nostd: [],
  			std: []
	    }
	}

	componentDidMount () {
		const { version } = this.state;

		FetchData('Nanes', version)
			.then(newState=>this.setState({ ...newState }))
			.catch(err=>console.log(err));
	}

	componentDidUpdate() {
   	  const { nanesNewName } = this.props;
   	  const { nanesChngd, nanesName } = this.state;
   	  
   	  if (nanesChngd) {
		  clearInterval(this.nanesChngdTimeout);      
		  this.nanesChngdTimeout = setTimeout(()=>this.setState({ nanesChngd: false, nanesName: nanesNewName }), 280);
   	  }
	      
   	  else if ( nanesName !== nanesNewName) this.setState({ nanesChngd: true });
	}

	render () {
       
   	    const nanesClassName = this.state.nanesChngd ? 'pokras_info invis' : 'pokras_info pokras_info--begin' ;

	   if (this.state.nanesName.length > 0) {
	   	    const nanesArr = this.state[this.state.nanesName];
		    return (
		         <div className={nanesClassName}>
		             <div className="pokras_info__nanesenie">
		                 {nanesArr.map(el=>{
		                 	   return (

					                 <div key={el.name} className={`img ${el.name}`}>
					           			  <img src={`img\\Chairs\\${el.src}`} alt=""/>
					                 </div>

		                 	   	)}
		                  )}
		             </div>
		         </div>
		    )   	
	   }
	   else {
	   	return (
	        <div className="pokras_info invis">
	   	   		<div className="pokras_info__nanesenie"><div className="img"><img src="" alt=""/></div></div>
	   	   	</div>
	    )
	   }
	}
}
