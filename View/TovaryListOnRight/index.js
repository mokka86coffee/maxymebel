import React from 'react';

function filterChng (elCategory,categ) {
	if (categ == 'Все') return true;
	else if (elCategory == categ) return true;
	else return false;
}

function Imgs ({ tovarChoose, category, current, imgs, imgsChosen }) {
	
	if (imgs.length < 1) { return null }
	else {
		return imgs
			.filter(el=>filterChng(el.category,imgsChosen))
			.map((el,i)=> {
			const filterInvis = imgsChosen != el.category  && imgsChosen != 'Все';
			return (
				<div 
		          key={el.src} 
		          onClick={()=>tovarChoose(el,i)}
		          className={ 'afilterInvis' }
			      style={current == el.src ? {boxShadow: 'inset 0 0 10px #2c2c2c36'} : {}}
		        >
				   <img 
				      src={`img\\${category}\\${el.src}\\big${el.src}1.png`} 
				      alt={el.name}
				    />
           			<p className="img_title">
		              {el.name}
		            </p>
		            <span>{el.params.info}</span>
		            <i>от <b>{el.params.price}</b> р</i>
				</div>
			)
		})
	}
	
}

export default Imgs;