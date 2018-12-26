import React, { Component } from 'react';

export default class Dopslider extends Component {
	
	state = {
		imgLoaded: false,
		imgSrc: ''
	}

    handleImgLoad = () => this.setState({ imgLoaded: true });

    componentDidUpdate () {
        const { imgLoaded, imgSrc } = this.state;
	    const { dopSliderSrc } = this.props;

	    if (imgSrc !== dopSliderSrc) {
	    	this.setState({ imgSrc: dopSliderSrc, imgLoaded: false })
	    }
    }

    render () {


	    const { dopSliderSrc, dopSliderClosed, dopSliderClicked } = this.props;
	    
	    // const dopSliderImgClassname = dopSliderClicked ? 'dopslider__bigimg' : 'invis dopslider__bigimg';

	    const template = 
	            <div className={'invis dopslider__bigimg'}> 
	              <img />
	            </div>;
	    
	    if (!dopSliderClicked) return template;

	    return (
	            <div className='dopslider__bigimg' onClick={() => dopSliderClosed()}>
	                <img 
	                	src={ dopSliderSrc } 
	                	onLoad={()=>this.handleImgLoad()} 
	                	alt=""
	                	className={this.state.imgLoaded ? '' : 'invis'}
	                />
	            </div>
	    )
  }
}