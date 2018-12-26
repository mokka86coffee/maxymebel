import React, {Component, PureComponent} from 'react';
import Loader from '../Loader';
import Contacts from '../Contacts';
import Chairs from '../Chairs';
import Portfolio from '../Portfolio';
import About from '../About';

class Main extends PureComponent {

   constructor(props) {
   		super(props);
   }
   
   state = {
   	  invisible: true,
   	  sliderId: 1
   }

   componentDidMount () {
   	setTimeout(()=>this.setState(state=>({invisible: false})), 100);
   }

   componentWillUnmount() { 
   	this.setState(state=>({invisible: true}));
   }

   handleSlide = id => this.setState({sliderId: id})

   render () {
   	    const { invisible, sliderId } = this.state;
   	    const { compChngd, categChoose } = this.props;

	   	return (
			<div className={invisible || compChngd ? 'invisible main' : 'main'}>
			    <div 
			    	className={	sliderId == 1 
			    					? "main__slide main__slide--slide1 clicked" 
			    					: "main__slide main__slide--slide1"
			    			   }
    			>
			    	<img 
    			        onClick = {()=>this.handleSlide(1)}
			    		src="https://c.wallhere.com/photos/e6/c7/interior_room_chair_couch_furniture-709097.jpg!d" alt="" className="main__slide__img"/>
			    	<h3 className="main__slide__title">крутой стул с узором</h3>
			    	<p className="main__slide__info">КОЛЛЕКЦИЯ МЕБЕЛИ</p>	
					 <div 
					    onMouseDown={()=>categChoose('tables')}
					 	className="main__slide__button">
						  <span className="main__slide__button-icon"><i className="fas fa-angle-right" aria-hidden="true"></i></span>
						  <span className="main__slide__button-text">В КАТАЛОГ</span>
					 </div>
			    </div>
			    <div 
			    	className={	sliderId == 2 
			    					? "main__slide main__slide--slide2 clicked" 
			    					: "main__slide main__slide--slide2"
			    			   }
    			>
			    	<img 
    			        onClick = {()=>this.handleSlide(2)}
			    		 src="http://berkem.ru/wp-content/uploads/2017/07/Korichnevyj_divan_v_gostinoj.jpg" alt="" className="main__slide__img"/>
			    	<h3 className="main__slide__title">крутой стул с узором</h3>
			    	<p className="main__slide__info">КОЛЛЕКЦИЯ МЕБЕЛИ</p>	
					 <div className="main__slide__button" onMouseDown={()=>categChoose('chairs')}>
						  <span className="main__slide__button-icon"><i className="fas fa-angle-right" aria-hidden="true"></i></span>
						  <span className="main__slide__button-text">В КАТАЛОГ</span>
					 </div>
			    </div>
			    <div 
			    	className={	sliderId == 3 
			    					? "main__slide main__slide--slide3 clicked" 
			    					: "main__slide main__slide--slide3"
			    			   }
    			>
			    	<img 
    			        onClick = {()=>this.handleSlide(3)}
			    		  src="https://img.fonwall.ru/o/97/fonwall_ru_interer_gostinaya_kinoteatr_akustika_divan_stolik_obstanovka_ComputerDesktopWallpapersCollection426_029.jpg" alt="" className="main__slide__img"/>
			    	<h3 className="main__slide__title">крутой стул с узором</h3>
			    	<p className="main__slide__info">КОЛЛЕКЦИЯ МЕБЕЛИ</p>	
					 <div className="main__slide__button" onMouseDown={()=>categChoose('tables')}>
						  <span className="main__slide__button-icon"><i className="fas fa-angle-right" aria-hidden="true"></i></span>
						  <span className="main__slide__button-text">В КАТАЛОГ</span>
					 </div>
			    </div>
			    <div 
			    	className={	sliderId == 4 
			    					? "main__slide main__slide--slide4 clicked" 
			    					: "main__slide main__slide--slide4"
			    			   }
    			>
			    	<img 
    			        onClick = {()=>this.handleSlide(4)}
			    		   src="https://ninetrends.ru/wp-content/uploads/2016/08/Seryj-tsvet-v-interere-8.jpg" alt="" className="main__slide__img"/>
			    	<h3 className="main__slide__title">крутой стул с узором</h3>
			    	<p className="main__slide__info">КОЛЛЕКЦИЯ МЕБЕЛИ</p>					
					 <div className="main__slide__button" onMouseDown={()=>categChoose('chairs')}>
						  <span className="main__slide__button-icon"><i className="fas fa-angle-right" aria-hidden="true"></i></span>
						  <span className="main__slide__button-text">В КАТАЛОГ</span>
					 </div>
			    </div>

			    <div className="main__info" style={{'display':'none'}}>
			        <h1>Раздвижная модель стола "ГРАНД"</h1>
			        <p> <em>гармонично впишется в офисный интерьер переговорных комнат</em> </p>
			        <button>Посмотреть</button>
			  		<div className="shadow">01</div>
			    </div>
			</div>
		)
   } 
};


export default function (props) {
	switch (props.comp) {
		case 'main': return <Main categChoose={props.categChoose} compChngd={props.compChngd} />;
		case 'contacts': return <Contacts compChngd={props.compChngd} />;
		case 'chairs': return <Chairs compChngd={props.compChngd} chosenComponent={'Chairs'} version={1} />;
		case 'tables': return <Chairs compChngd={props.compChngd} chosenComponent={'Tables'} version={1} />;
		case 'projects': return <Portfolio compChngd={props.compChngd} />;
		case 'about': return <About compChngd={props.compChngd} />;
		default: return <Loader />;
	}
}

<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
