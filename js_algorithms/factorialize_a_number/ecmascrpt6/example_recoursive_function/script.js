




function factorialize(){
	const numbers = document.getElementsByName("demo")[0].value.split(' ');
	const returnArray = [];
	
	numbers.forEach(number=> {
			
			num = recursivef(number);
			return returnArray.push(num);
		})
	return alert(returnArray.join(',  '));
	
}


function recursivef(number){
	if(number === 0){
		return 1;
	}
	
	return number * recursivef(number-1); 
}