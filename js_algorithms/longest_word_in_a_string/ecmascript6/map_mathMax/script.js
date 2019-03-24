

function split_(){
	const string = document.getElementsByName("demo")[0].value;
	return string.split(' ');
}

function findLongestWord(){
	
	const listSize = split_().map(item => item.length);
	let max = Math.max(...listSize);
	return alert(max);
}

