import React, {Component} from 'react';
import Loader from '../Loader';

export default class About extends Component {
   
   state = {
   	  invisible: true
   }

   componentDidMount () {
   	setTimeout(()=>this.setState(state=>({invisible: false})), 200);
   }

   componentWillUnmount() {   	
   	this.setState(state=>({invisible: true}));
   }

   render () {
   	    const { invisible } = this.state;
        const { compChngd } = this.props;
	   	return (
			<div className={invisible || compChngd ? 'invisible about topzagolovok' : 'about topzagolovok'}>
                    <em className={invisible || compChngd ? 'invis topsign' : 'topsign'}>Добро пожаловать</em>
			        <h1 className={invisible || compChngd ? 'invis' : ''}>о компании</h1>
			        <div className="about__wrapper">

				        <div className="col-3 about__topimg">
				        	<div className={invisible || compChngd ? 'invis col-6' : 'col-6'}>
				        		<img src="img/About/the_top.jpg" alt=""/>
				        	</div>
				        </div>
				        <div className="col-3 about__topinfo">
				        	<div className={invisible || compChngd ? 'invis' : ''}>
				        	   <p>
				        	   		Производство мебели – почти искусство. Особенно, когда этим занимаются профессионалы. 
				        	   		В случае с фабрикой «Майя» - это не просто слова. Над созданием мягкой мебели, 
				        	   		столов и стульев здесь трудятся потомственные мебельщики. 
				        	   		На протяжении 18 лет, специалисты фабрики ежедневно работают над созданием 
				        	   		и разработкой столовых групп из натурального дерева – массива бука, 
				        	   		а так же мягкой мебели, которая бы отвечала потребностям разных групп потребителей.
			        	   		</p>
			        	   		<br/>
				        	   <p>
				        	   		Развитая дилерская сеть по всей России и странам СНГ, сотни единиц мебели, 
				        	   		ежедневно отгружающихся со склада компании, лучше всяких слов говорят о качестве выпускаемой продукции. 
				        	   		Кстати, фабрика «Майя» является лауреатом конкурса «Национальный знак качества», 
				        	   		а так же включена в официальный реестр «Надежная репутация».
			        	   		</p>

			        	   		<div className={invisible || compChngd ? 'invis about__topinfo__advantages col-6' : 'about__topinfo__advantages col-6'}>
			        	   			<div className="advantage">
			        	   				<i className="fas fa-info"></i>
			        	   				<p>Изделия без наценок</p>
			        	   			</div>
			        	   			<div className="advantage">
			        	   				<i className="fas fa-info"></i>
			        	   				<p>Мебель от производителя имеет гарантию</p>
			        	   			</div>
			        	   			<div className="advantage">
			        	   				<i className="fas fa-info"></i>
			        	   				<p>Существенные бонусы и скидки</p>
			        	   			</div>
			        	   		</div>
				        	</div>
				        </div>
				        
				        <div className={invisible || compChngd ? "col-2 about__dopinfo invis" : "col-2 about__dopinfo"}>
				        	<h2>Информация</h2>
				        	<p>В данном разделе мы постарались собрать всю полезную информацию касательно сервиса и услуг,
				        		таких как: доставка, гарантия, выбор ткани / модели, сроки производства и др.
				        	</p>
				        </div>
				        <div className={invisible || compChngd ? "col-4 about__dopblocks invis" : "col-4 about__dopblocks"}>
		        			<input type="checkbox" id="about__dopblocks__block1" />
				        	<div className="about__dopblocks__block block1">
				        		<label htmlFor="about__dopblocks__block1"><h3> Производство </h3></label>
				        		<p>Доставка осуществляется в течении нескольких месяцев, после оплаты</p>
				        	</div>
		        			<input type="checkbox" id="about__dopblocks__block2" />
				        	<div className="about__dopblocks__block block2">
				        		<label htmlFor="about__dopblocks__block2"><h3>Стоимость и сроки доставки</h3></label>
				        		<p><b>Доставка осуществляется:</b> 
				        			<ul>
				        				<li>В пределах Челябинска/Копейска - 500 руб.</li>
				        				<li>В любые города России, Казахстана, Киргизии, Беларусии,
				        					до Транспортной компании - 300 руб.</li>
				        			</ul>
				        		</p>
				        		<p>*Подъем - 150 руб / этаж (1й и последний пр наличии лифта)</p>
				        		<p>**Сборка рассчитываются индивидуально</p>
				        	</div>
		        			<input type="checkbox" id="about__dopblocks__block3" />
				        	<div className="about__dopblocks__block block3">
				        		<label htmlFor="about__dopblocks__block3"><h3>Оптовым покупателям</h3></label>
				        		<p>Оптовым покупателям предоставляетсяя скидка (уточняйте у менеджера)</p>
				        	</div>
		        			<input type="checkbox" id="about__dopblocks__block4" />
				        	<div className="about__dopblocks__block block4">
				        		<label htmlFor="about__dopblocks__block4"><h3>Гарантийные обязательства</h3></label>
				        		<p>Гарантия от производителя - 18 месяцев</p>
				        	</div>
				        </div>
		        	</div>
			</div>
		)
   } 
};


