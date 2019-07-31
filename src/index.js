import ReactDOM from 'react-dom';
import React, { Component, Fragment } from 'react';

//Стили
import './Styles/style.scss';

//Components
import Menu from './Components/Menu';
import Main from './Components/Main';
import { Loading } from './Components/Loader';
import FirstLoad from './View/FirstLoad';


class App extends Component {

   state = {
   	  comp: 'main',
   	  compChngd: false,
      loading: true
   }

   categChoose = (comp) => {

    if ( comp !== this.state.comp ) {
      
      if (
        (comp == 'chairs' && this.state.comp == 'tables') 
        || 
        (comp == 'tables' && this.state.comp == 'chairs')
          ) 
          { setTimeout( () => this.setState(state=>({comp, compChngd: false})), 0 ) }
      else { setTimeout( () => this.setState(state=>({comp, compChngd: false})), 1300 ) }
        
      this.setState(state=>({ compChngd: comp }));
    }

   }

   componentDidMount () {
      setTimeout(()=>this.setState({loading: false}), 4500);
   }

   render () {
   	  return (
   	  	<>
        <div className={this.state.loading ? "firstload" : "firstload invis"}>
          <FirstLoad />
        </div>  

		    <div className="col-1 aside">
		        <h2 className="aside__logo">Logo</h2>
            <span className="aside__phone"><b>+7</b><em>(351)</em> 792 92 92</span>
		        <Menu  categChoose={this.categChoose} comp={this.state.comp}/>
		        <p className="aside__copyright">
		          	Интернет-магазин Мебели
		          	<br />
		          	<em>© Logo 2018</em> 
		          	<br />
		          	Все права защищены
		        </p>
		    </div>
		    <div className="col-5">
		    	<Main comp={this.state.comp} compChngd={this.state.compChngd} categChoose={this.categChoose}/>
		    </div>
		</>
   	  )
   }

}

ReactDOM.render(<App />, document.querySelector('#root') );