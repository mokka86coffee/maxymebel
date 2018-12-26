import React, { Component } from 'react';

export default class Dopslider extends Component {
	
	state = {
		imgLoaded: false,
		imgSrc: ''
	}

    handleImgLoad = () => this.setState({ imgLoaded: true });

    componentDidUpdate () {
        const { imgSrc } = this.state;
	    const { src, index, chosenComponent } = this.props;

	    const newSrc = `img\\${chosenComponent}\\${src}\\bigdop${src}${index}.jpg`;

	    if (imgSrc !== newSrc) {
	    	this.setState({ imgSrc: newSrc, imgLoaded: false })
	    }
    }

    render () {


	    const { dopSliderClosed, dopSliderClicked } = this.props;
	    const { imgSrc } = this.state;
	    
	    const template = 
	            <div className={'invis dopslider__bigimg'}> 
	              <img />
	            </div>;
	    
	    if (!dopSliderClicked) return template;

	    return (
	            <div className='dopslider__bigimg' onClick={() => dopSliderClosed()}>
	                <img 
	                	src={ imgSrc } 
	                	onLoad={()=>this.handleImgLoad()} 
	                	alt=""
	                	className={this.state.imgLoaded ? '' : 'invis'}
	                />
	            </div>
	    )
  }
}