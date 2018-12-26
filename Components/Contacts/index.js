import React, {Component} from 'react';
import Loader from '../Loader';
import VkSend from './vkSendMsg';

export default class Contacts extends Component {

	constructor(props) {
		super(props);
		this.phoneInput = React.createRef();
		this.state = {
	   	  invisible: true,
	   	  msgSent: false
	   }
	}
   

   componentDidMount () {
   	setTimeout(()=>this.setState(state=>({invisible: false})), 200);
   }

   componentWillUnmount() {   	
   	this.setState(state=>({invisible: true}));
   }
   //oauth.vk.com/blank.html#access_token=29413427d44733ac6d00185f76f6cfa45d3971d3fe56cae5b37b91b4173f1a324b97ca34fc714a2a3c0ee&expires_in=0&user_id=493063066
   sendMail = async (e,e2,e3) => {
   		e.preventDefault();

   		const form = document.forms.ContactsForm.elements;

   		let testPhone = form.phone.value.replace(/\D/gi,'');
   		if (!/\d{10,15}/.test(testPhone)) {
   			console.log(this.phoneInput.current.style);
   			this.phoneInput.current.style.setProperty('border-color','red');
   			return;
   		}

   		this.phoneInput.current.style.setProperty('border-color','#f9f9f9');
   		const usrName = 'Имя: '+form.name.value+'\n';
   		const usrPhone = 'Телефон: '+form.phone.value+'\n';
   		const usrMsg = 'Сообщение: '+form.msg.value+'\n';
   		const fullMsg = encodeURI(usrName+usrPhone+usrMsg);
   		await VkSend(fullMsg);	   
   		await this.setState({ msgSent: true });
   }

   handleInput = () => this.phoneInput.current.style.setProperty('border-color','#f9f9f9');

   render () {
   	    const { invisible, msgSent } = this.state;
        const { compChngd } = this.props;

        const disabled = msgSent ? 'disabled' : '';
	   	return (
			<div className={invisible || compChngd ? 'invisible contacts topzagolovok' : 'contacts topzagolovok'}>
                    <em className={invisible || compChngd ? 'invis topsign' : 'topsign'}>Контакты</em>
			        <h1 className={invisible || compChngd ? 'invis' : ''}>Связаться с нами</h1>
			        <div className="col-3 contacts__info">
			        	<div className={invisible || compChngd ? 'invis col-6' : 'col-6'}>
			        		<div className="icon icon-email"></div>
			        		<p><em>info@domain.com</em></p>
			        	</div>
			        	<div className={invisible || compChngd ? 'invis col-6' : 'col-6'}>
			        		<div className="icon icon-address"></div>
			        		<p>198 West 21th Street, <br/> Suite 721 New York NY 10016</p>
			        	</div>
			        	<div className={invisible || compChngd ? 'invis col-6' : 'col-6'}>
			        		<div className="icon icon-phone"></div>
			        		<p><em>+123 456 7890</em></p>
			        	</div>
			        </div>
			        <div className="col-3 contacts__form">
			        	<form 
			        		name="ContactsForm"
			        		className={invisible || compChngd ? 'invis' : ''}
			        		onSubmit={(e,e2,e3)=>this.sendMail(e,e2,e3)}
			        	>
			        	   <input maxLength="40" disabled={disabled} type="text" name="name" placeholder="Имя"/>
			        	   <input 
			        	   		ref={this.phoneInput} 
			        	   		maxLength="20" 
			        	   		disabled={disabled} 
			        	   		onInput={()=>this.handleInput()}
			        	   		required 
			        	   		type="text" 
			        	   		name="phone" 
			        	   		placeholder="Телефон"
			        	   	/>
			        	   <textarea disabled={disabled} maxLength="440" rows="10" name="msg" placeholder="Сообщение" />
			        	   <br />
			        	   <input disabled={disabled} className={msgSent ? 'sent' : ''} value={msgSent ? 'ОТПРАВЛЕНО' : 'ОТПРАВИТЬ'} type="submit"/>
			        	</form>
			        </div>
			</div>
		)
   } 
};


