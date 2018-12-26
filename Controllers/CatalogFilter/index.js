import React, {Component, Fragment} from 'react';

function Filter ({name, checked, funcChngd}) {
  const values = name == 'Chairs'
    ? ['Стандарт', 'Барные', 'Кресла', 'Из фанеры', 'Все']
    : ['Обеденные', 'Журнальные', 'Все'];


  return values.map((el,i)=>{

    const check = el==checked ? 'checked' : '';
    return (
      <div key={name+i}>
        <input 
          checked = { check } 
          type="radio" 
          id={`filterChairs${i+1}`} 
          name="filter_mebel" 
          value={el}
          onChange={()=>funcChngd(el)}
        />
        <label className="filter_item" htmlFor={`filterChairs${i+1}`}>{el}</label>
      </div>
    )
  })
}

export default Filter;