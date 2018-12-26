function isLocal (name, version = 0) {
        return false; // for testing
		
		if ( !localStorage.getItem(`version${name}`) ) { return false }
		else if ( localStorage.getItem(`version${name}`) != version ) { return false } 
			 else { return true }
}

function getLocal (...names) {
	const newState = {};
    
    names.forEach( el => newState[el] = JSON.parse(localStorage.getItem(el)) );

	return newState;
}

function setLocal ( version, name, names) {

    Object.keys(names).forEach( el =>  localStorage.setItem(el, JSON.stringify(names[el])) );

	localStorage.setItem(`version${name}`, version);
}

async function FetchData ( name, version ) {


		let newState = {};
		let hasLocal = isLocal( name, version );
	    
		if ( hasLocal ) {	
			switch ( name ) {
				case 'Nanes':  return getLocal('std','nostd','pat');
				case 'Chairs':  return getLocal('imgsChairs', 'tkani');
				case 'Tables':  return getLocal('imgsTables');
			}	
		}
	    
	    let lowerName = name.toLowerCase();

	    await fetch(`${lowerName}.json`).then(res=>res.json())
			.then(
				body=>{
					setLocal(version, name, { ...body });
	            	newState = body;
				}
			)
			.catch(err=>console.log('FetchData error', err));  
    	
    	return await newState;
}


export default FetchData;