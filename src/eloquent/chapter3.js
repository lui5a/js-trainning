function min(min, max){
	return Math.min(min,max);
};
console.log(min(0, 10));
console.log(min(0, -10));






// bean counting

function countBs(b){
  
	let counter = 0;
	  for(var i = 0 ; i < b.length ; i++ ){
			if(b[i] === 'B'){
		   counter += 1;
		 }
	  }
	return counter;
  }

//////////////////

function countBs(b){
	return countChar(b, 'B');
  
  }
  
  function countChar(string, char){
	let counter = 0;
	  for(var i = 0 ; i < string.length ; i++ ){
			if(string[i] === char){
		   counter += 1;
		 }
	  }
	return counter;
  }