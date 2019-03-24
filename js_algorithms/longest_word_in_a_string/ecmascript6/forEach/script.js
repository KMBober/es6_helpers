
function split_(){
	const string = document.getElementsByName("demo")[0].value;
	return string.split(' ');
}

function findLongestWord(){
	let maxLength = 0; 
	const list = split_();
	
	list.forEach(function(arg){
		
		if(arg.length > maxLength){
			maxLength = arg.length;
		}
	})
	
	return alert(maxLength);
}
