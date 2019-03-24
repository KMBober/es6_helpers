




function factorialize(){
	var numbers = document.getElementsByName("demo")[0].value.split(' ');
	var returnArray = [];
	
	
	for(i = 0 ; i < numbers.length; i++){
		var temp = 1;
	
		for(j = numbers[i] ; j>0 ; j--){
			temp *= j;
		}
		console.log(temp)
		returnArray[i] = temp;
	}
	
	alert(returnArray.join(', '));
}
