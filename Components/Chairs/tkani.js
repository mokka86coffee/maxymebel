import React, { Component } from 'react';
import { Loading } from '../Loader';

export default class Tkani extends Component {

    state = {
      imgLoaded: false,
      tkaniOnlyClicked: false,
      tkaniOnlyBigSrc: '',
      tkaniOnlyBigTitle: '',
      tkaniOnlyBigCateg: ''
    }

    tkaniOnlyOneClick = (e, el) => {
      this.setState({ 
        tkaniOnlyClicked: true, 
        tkaniOnlyBigSrc: `img\\tkani\\big${el.src}`,
        tkaniOnlyBigTitle: el.name,
        tkaniOnlyBigCateg: el.categ
      });
    }

    tkaniOnlyOneClose = () => this.setState({ tkaniOnlyClicked: false, imgLoaded: false, tkaniOnlyBigSrc: null });
    
    imgLoad = () => this.setState({ imgLoaded: true });

    render () {


    const { tkaniClicked, tkaniArr, tkaniClosed } = this.props;
    const { tkaniOnlyClicked, tkaniOnlyBigSrc, tkaniOnlyBigTitle, tkaniOnlyBigCateg, imgLoaded } = this.state;
    
    const tkaniShowClassname = tkaniClicked ? ' tkani__only' : 'invis  tkani__only';
    const tkaniBigimgClassname = tkaniOnlyClicked ? ' tkani__only__bigimg' : 'invis  tkani__only__bigimg';

    const template = 
        <div className={ tkaniShowClassname }>
            <div className=" tkani__only__close" > </div>
            <div className=" tkani__only__freim"> 
                <div className="variant6"> <img src=""/> </div>
            </div>
        </div>;
    
    if (!tkaniClicked) return template;

    const Loader = !imgLoaded ? Loading : null;

    return (
        <div className={ tkaniShowClassname }>
            <div 
              className="tkani__only__close"
              onClick={()=>tkaniClosed()}            
            >
            </div>
            <div className=" tkani__only__freim">
                  {
                    tkaniArr.map((el,i)=>{
                        return (
                          <div 
                            key={el.src+i} 
                            className="variant2"
                            onClick = {e=>this.tkaniOnlyOneClick(e, el)}
                          >
                            <img src={`img\\tkani\\${el.src}`} alt=""/>
                            <p>{el.name}</p>
                          </div>
                        )
                    })
                  }
            </div>
            <div className={ tkaniBigimgClassname } onClick={() => this.tkaniOnlyOneClose()}>
                { Loader }
                <img 
                  src={ tkaniOnlyBigSrc } alt=""
                  onLoad={ e=>this.imgLoad(e) }
                  className={ !imgLoaded ? 'invis' : ''}
                />
                <p>{ tkaniOnlyBigTitle }</p>
                <em>{ tkaniOnlyBigCateg }</em>
            </div>
        </div>
    )
  }
}