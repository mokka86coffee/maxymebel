import React from 'react';

import { categories } from './data.json';
import { table, chair, card, projects, home, phone } from './svgicons';


const MenuList = (props)=> {
	const { categChoose, comp } = props;
    return categories.map(el=>
    {
    	let elemIcon;
    	switch (el.name) {
    		case "Главная": elemIcon=home; break;
    		case "Стулья": elemIcon=chair; break;
    		case "Столы": elemIcon=table; break;
    		case "Проекты": elemIcon=projects; break;
    		case "О нас": elemIcon=card; break;
    		case "Контакты": elemIcon=phone; break;
    		default: elemIcon=table; break;
    	}
    	return (
	    	<li 
	    		className={(el.comp===comp) ? 'chosen' : ''}
	    		key={el.comp}     		
	    		onClick={()=>categChoose(el.comp)}>
	            {elemIcon}
	    	    <a className={(el.comp===comp) ? 'orange' : ''}>{el.name}</a>
	    	</li>
    	)
    }
    )
}

export default function (props) {
	const { categChoose, comp } = props;
	return (
		 <ul className="menu">
		   <MenuList categChoose = { categChoose } comp={comp}/>
		 </ul>
	)
}
