




function factorialize2(){
	var numbers = document.getElementsByName("demo")[0].value.split(' ');
	var returnArray = [];
	
	numbers.forEach(function(number){
		
		num = recursivef(number);
		
		return returnArray.push(num);
	})
	return alert(returnArray);
	
}


function recursivef(number){
	if(number === 0){
		return 1;
	}
	
	return number * recursivef(number-1); 
}