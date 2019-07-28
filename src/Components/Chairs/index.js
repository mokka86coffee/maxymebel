import React, {Component, Fragment} from 'react';
import { Loading } from '../Loader';

import Tkani from './tkani';

//Controllers
import Dopslider from '../../Controllers/DopImgsFullScreen';
import PokrasFull from '../../Controllers/PokrasFull';
import CatalogViewHandler from '../../Controllers/CatalogViewHandler';
import Filter from '../../Controllers/CatalogFilter';

//View
import PokrasList from '../../View/PokrasList';
import TovaryListOnRight from '../../View/TovaryListOnRight';
import FreimArrows from '../../View/FreimArrows';
import DimensionsText from '../../View/DimensionsText';
import DopPhotosInsideFreim from '../../View/DopPhotosInsideFreim';

//Data
import FetchData from '../../Data/FetchData';


 export default class Chairs extends Component {

   constructor(props) {
   	  super(props);

      this.div = '';
      this.divPos = '';

      this.state = {
          chosenComponent: this.props.chosenComponent,
          version: this.props.version,
          viewWay: this.props.chosenComponent,

          compChngdIndicator: false,

          invisible: true,
          fullScrCatalog: true, // 
          fullScrCatalogToggler: true, // Каталог на полный экран
          fullScrCatalogChng: false,  // Действие на каталоге (кнопка на весь экран / из fullsreen нажатие на товар)
          
          imgsChosen: 'Все',
          imgsChairs: [],
          imgsTables: [],

          nanesName: '',

          tkani: [], // Ткани массив
          tkaniClicked: false,

          dopSliderClicked: false,  // Доп фото слайдер
          dopSliderSrc: '',
          dopSliderInd: '',   

          picClicked: false,
          imgLoaded: false,

          sliderChngId: 1,

          current: {
            name: "Выбор",
            src: "",
            text:"Выберите модель из списка",
            params: {
              "height": "",
              "width": "",
              "depth": "",
              "weight": ""
            }
          }
       }
   }
   

   componentDidMount () {
    const { version, chosenComponent } = this.state;

    FetchData(chosenComponent, version)
      .then( newState=> this.setState({ ...newState, fullScrCatalog: false, viewWay: chosenComponent }) )
      .catch(err=>console.log(err));
   }

   componentWillUnmount() {   	
   	  this.setState({invisible: true});
   }

   componentDidUpdate() {
      const { picClicked, chosenComponent, compChngdIndicator } = this.state;
      const { compChngd } = this.props;

      if ( chosenComponent !== this.props.chosenComponent) {
          const { version } = this.state;
          const { chosenComponent } = this.props;

          const current = 
          {
            name: "Выбор",
            src: "",
            text:"Выберите модель из списка",
            params: {
              "height": "",
              "width": "",
              "depth": "",
              "weight": ""
            }
          };

          FetchData(chosenComponent, version)
            .then( newState => setTimeout(()=>{
              this.div.scrollTop = 0;
            
              this.setState({ 
                ...newState,  
                current, 
                viewWay: chosenComponent, 
                nanesName: '',
                dopSliderClicked: false,
                imgLoaded: false,
                tkaniClicked: false,
                fullScrCatalogToggler: true,
                fullScrCatalog: false,
                imgsChosen: 'Все'
              })
            }, 1500 ))
            .catch(err=>console.log(err));
              
            this.setState({ 
              invisible: true, 
              fullScrCatalog: true, 
              fullScrCatalogChng: false, 
              chosenComponent, 
              compChngdIndicator: false 
            });

        } else {

        }

      if ( !compChngdIndicator && compChngd ) {
          this.setState({ 
            invisible: true, 
            fullScrCatalog: true, 
            fullScrCatalogChng: false, 
            compChngdIndicator: true
          });
      }

      if (picClicked) { setTimeout(()=>this.setState(state=>({picClicked: false})),400) }
   }
   
   chairChoose = (el,i)=> {
   	    const { fullScrCatalogToggler, picClicked, viewWay, current: { src } } = this.state;
        this.divPos = viewWay == 'Chairs' ? Math.floor(i/5)*348 : Math.floor(i/4)*308;

        if ( fullScrCatalogToggler ) { 
          
          if ( i < 5 ) { setTimeout(()=> this.div.scrollTop = viewWay == 'Chairs' ? i*306 : i*298, 700); }
          else { setTimeout(()=> this.div.scrollTop = viewWay == 'Chairs' ? i*384 : i*288, 700); }
          setTimeout(()=> this.setState({ fullScrCatalogChng: false }), 680);
            
          this.setState({ fullScrCatalogChng: true, fullScrCatalogToggler: false });
        }

        if (src !== el.src) {
          this.setState({
            current: el,
            picClicked: true,
            imgLoaded: false,
            sliderChngId: 1
          })
        }

        this.setState({invisible: false});

   }

   mainImgLoaded = (e) => this.setState({ imgLoaded: true, invisible: false });

   sliderChng = id => {
   		const { sliderChngId } = this.state;
   		if(sliderChngId !== id) { this.setState({ sliderChngId: id, imgLoaded: false }) }
   }

   pokrasInfoShow = (name) => {
   	  const { nanesName } = this.state;
   	  if (nanesName !== name) { this.setState({ nanesName: name }) }
  }


  tkaniChoose = () => this.setState({tkaniClicked: true, nanesName: ''})

  tkaniClosed = () => this.setState({tkaniClicked: false})

  dopSliderClick = (src, i) => this.setState({dopSliderClicked: true, dopSliderSrc: src, dopSliderInd: i})

  dopSliderClosed = () => this.setState({dopSliderClicked: false})
   

  handlePosInDiv = node => { this.div = node; }

  toggleBtnListOnRight = e=>{ 
    setTimeout(()=> this.div.scrollTop = this.divPos, 640);
    setTimeout(()=>this.setState({ fullScrCatalogChng: false, tkaniClicked: false, invisible: true }), 600);    
    this.setState({ fullScrCatalogChng: true, fullScrCatalogToggler: true, nanesName: '' });
  }

  filterChngd = (imgsChosen) => {
    setTimeout(()=>this.setState({fullScrCatalogChng: false, imgsChosen }), 680);
    setTimeout(()=> this.div.scrollTop = 0, 700);
    this.setState({fullScrCatalogChng: true });
  }
  
   render () {

        const { invisible, current, picClicked, imgLoaded, imgsChosen,
   	    	    sliderChngId, viewWay, 
              fullScrCatalog, fullScrCatalogToggler, fullScrCatalogChng,//full screen catalog
   	    	    nanesName, //нанесение
              tkaniClicked, tkani, // ткани
              dopSliderClicked, dopSliderSrc, dopSliderInd // доп фото стульев
            } = this.state;

        let title;
        switch (viewWay) {
          case 'Chairs': title='Стулья'; break;
          case 'Tables': title='Столы'; break;
        }

   	    const Loader = !imgLoaded ? Loading : null;

        const fullCatalogVisibility = CatalogViewHandler(fullScrCatalog, fullScrCatalogToggler, fullScrCatalogChng);

 		return (
			<div className={invisible ? `invisible chairs topzagolovok ${viewWay.toLowerCase()}` : `chairs topzagolovok ${viewWay.toLowerCase()}`}>
              <em className={ fullScrCatalog ? 'invis topsign' : 'topsign' }>Мебель</em>
			        <h1 className={ fullScrCatalog ? 'invis' : '' }>{title}</h1>

              <div className={ fullCatalogVisibility }>
                  
                  <div className="filter"> <Filter checked={imgsChosen} funcChngd={this.filterChngd} name={viewWay} /> </div>
                  
                  <div className="btn_fullscreen" onClick = { ()=>this.toggleBtnListOnRight() } >
                      <div className="button"> <div></div><b>В каталог</b></div>
                  </div>
                  <div className="downArrow bounce"></div>
                  <div ref={this.handlePosInDiv} className="chairs__carusel__inside chairs__carusel__inside--full_screen">
                      <TovaryListOnRight imgsChosen={imgsChosen} current={current.src} category={viewWay} imgs={this.state[`imgs${viewWay}`]} tovarChoose={this.chairChoose} />
                  </div>
              </div>

			        <div className={invisible ? 'invis chairs__freim col-5' : 'chairs__freim col-5'}>
		             {Loader}
                 <img 
                   src={`img\\${viewWay}\\${current.src}\\big${current.src}${sliderChngId}.png`} 
                   onLoad={e=>this.mainImgLoaded(e)} alt=""
		               className={!imgLoaded ? 'invis' : ''}
                 />
                 <Dopslider 
                    dopSliderClosed = { this.dopSliderClosed }
                    dopSliderClicked = { dopSliderClicked }
                    chosenComponent = { viewWay }
                    index = { dopSliderInd }
                    src = { dopSliderSrc }
                 />

                 <PokrasList 
                    pokrasInfoShow = { this.pokrasInfoShow }
                    nanesName = { nanesName }
                    tkaniChoose = { this.tkaniChoose }
                    chosenComponent = { viewWay }
                 />

                 <DopPhotosInsideFreim 
                     chosenComponent = { viewWay }
                     invisible = { invisible }
                     dopSliderClick = { this.dopSliderClick }
                     src = { current.src }
                 />

                 <div className={invisible ? 'chairs__freim__info invis' : 'chairs__freim__info'}>
                       <h3 className={picClicked ? 'invis' : ''} > {current.name} </h3>
                       <p className={picClicked ? 'invis' : ''} > {current.text} </p>
                        <DimensionsText 
                            chosenComponent = { viewWay }
                            current = { current }
                            picClicked = { picClicked }
                        />

                 </div>

                 <FreimArrows sliderChngId={sliderChngId} sliderChng={this.sliderChng} />

                 <Tkani 
                    tkaniClicked={tkaniClicked}
                    tkaniArr={tkani} 
                    tkaniClosed={this.tkaniClosed}
                 />
			        </div>

               <PokrasFull nanesNewName = { nanesName } />
			</div>
		)
   } 
}


