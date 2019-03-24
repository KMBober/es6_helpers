



function findLongestWord(){
	
	const string = document.getElementsByName("demo")[0].value;
	string.split(' ').reduce((previousValue, currentValue) => max = Math.max(previousValue, currentValue.length) ,0);
	alert(max);
}

