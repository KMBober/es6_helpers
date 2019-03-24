


function stringReverse(){
	var string = document.getElementsByName("demo")[0].value;
	var tab = string.split('');
	var reverseTab = [];
	
	//  is better to use  -> reverse('') 
	for(i = 0; i< tab.length; i++ ){
		reverseTab[tab.length-(i+1)] = tab[i];
	}
	
	reverseTab = reverseTab.join('');
	return alert(reverseTab);
	
	

}


function reverseString(){
	var string = document.getElementsByName("demo")[0].value;
	return alert(string.split('').reverse().join(''));
	
}
