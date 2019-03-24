


function findLongestWord(){
	var string = document.getElementsByName("demo")[0].value;
	var words = string.split(' ');
	var maxLength = 0; 
  
  for(var i=0; i<words.length; i++){
    if(words[i].length>maxLength){
      maxLength = words[i].length;
    }
  }
  return alert(maxLength);
}

