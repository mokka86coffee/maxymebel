import React, {Component} from 'react';
import {Loading} from '../Loader';

function PortfolioChosen (props) {
    
    const { portfChosen, portfTheOneArr, portfClicked, portfClosed } = props;
    
    const portfShowClassname = portfClicked ? 'portfolio__only' : 'invis portfolio__only';

    const template = 
        <div className={ portfShowClassname }>
            <div className="portfolio__only__close" > </div>
            <div className="portfolio__only__freim"> <div className="col-5 "> <img src="" /> </div>
	            <div className="col-5"> 
	            	<div className="variant6"> <img src=""/> </div>
	            	<div className="variant6"> <img src=""/> </div>
	            </div>
            </div>
        </div>;
    
    if (!portfClicked) return template;
    if (portfTheOneArr.length < 1) return template;
    if (portfTheOneArr[portfChosen].others.length < 1) return template;
    
    const current = portfTheOneArr[portfChosen];

    return (
        <div className={ portfShowClassname }>
            <div 
            	className="portfolio__only__close"
            	onClick={()=>portfClosed()}            >
            </div>
            <div className="portfolio__only__freim">
	            <div className="col-5 ">
	               <img src={current.main} alt=""/>
	            </div>
	            <div className="col-5">
	                {
	                	current.others.map((el,i)=>{
	                		 	return (
	                		 		<div key={current.link+i} className="variant6">
				            			<img src={el} alt=""/>
	                		 		</div>
	                		 	)
	                	})
	                }
	            </div>
            </div>
        </div>
    )
}

export default class Portfolio extends Component {

   state = {
   	  invisible: true,
   	  portfolio: [],
   	  imgsLoadedCount: 0,
      imgsQuanity: 0,
      imgsLoaded: false,

      portfChosen: 0,
      portfClicked: false,
      portfTheOneArr: []
   }

   componentDidMount () {
   	fetch('portfolio.json').then(res=>res.json()).then(body=>
            this.setState(state=>({
            	portfolio: body.portfolio, 
            	imgsLoadedCount: body.portfolio.length,
            	portfTheOneArr: body.portfolioTheOne,
            	invisible: false
            }))
   	)
   }

   componentWillUnmount() {   	
   		this.setState({
   			invisible: true,
    		imgsLoaded: false
   		});
   }

   imgOnLoaded = () => {
   	    let { imgsQuanity, imgsLoadedCount} = this.state; imgsQuanity++;
   		if (imgsQuanity!==imgsLoadedCount) {
   			this.setState(state=>({ imgsQuanity: imgsQuanity }))
   		} else {
   			this.setState(state=>({ imgsLoaded: true }))
   		}
   }

   portfChoose = (id) => {
        this.setState({portfChosen: id, portfClicked: true});
   }

   portfClosed = () => {
        this.setState({portfClicked: false});
   }

   render () {
   	    const { 
   	    	invisible, portfolio, imgsLoaded, 
   	    	portfChosen, portfTheOneArr, portfClicked, portfClosed // Показ фрейма с выбранным залом
   	    } = this.state;
        const { compChngd } = this.props;
   	    const loader = !imgsLoaded ? Loading : null;
		return (			
			<div className={invisible || compChngd ? 'invisible portfolio topzagolovok' : 'portfolio topzagolovok'}>
                    <em className={invisible || compChngd ? 'invis topsign' : 'topsign'}>Проекты</em>
			        <h1 className={invisible || compChngd ? 'invis' : ''}>Портфолио</h1>
			        <div className={compChngd ? 'invis col-6 portfolio__info' : 'col-6 portfolio__info'}>
			        {loader}
		            {
		            	portfolio.map((el,i)=>{
		            		const classVariant = ( i==2 || i==3 ) ? "variant variant6" : "variant variant3";
		            		return (
					        	<div 
					        	  onClick={()=>this.portfChoose(i)}
					        	  className={!imgsLoaded ? 'invis variant' : classVariant} 
					        	  key={el.link}
					        	>
					        		<img onLoad={()=>this.imgOnLoaded()} src={el.img} alt={el.title}/>
					        		<div className="variant__text">
					        		    <h3>{el.title}</h3>
					        		    <p>{el.description}</p>
					        		    <button></button>
					        		</div>
					        	</div>
		            		)
			            })
			        }
		        	</div>
		        	<PortfolioChosen 
		        		portfChosen={portfChosen} 
		        		portfTheOneArr={portfTheOneArr} 
		        		portfClicked={portfClicked} 
		        		portfClosed={this.portfClosed}
		        	/>
			</div>
		)
	}
}