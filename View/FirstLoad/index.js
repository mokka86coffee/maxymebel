import React, { Component, Fragment } from 'react';

class FirstLoad extends Component {
	
	constructor (props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount () {
		setTimeout(()=>this.setState({loading: false}), 0);
	}

	render () { 
		const {loading} = this.state;
		return (
			<div className="text-container">
				<span className={loading ? "reg-text" : "reg-text loaded"}>Интернет-магазин мебели </span>
	    		<span className={loading ? "letter" : "letter loaded"}>Maxy</span>
	    		<span className={loading ? "letter" : "letter loaded"}> M</span>
	    		<span className={loading ? "letter" : "letter loaded"}>e</span>
	    		<span className={loading ? "letter" : "letter loaded"}>b</span>
	    		<span  className={loading ? "letter" : "letter loaded"}>el</span>
			</div>
		);
	}
}

export default FirstLoad;