//1.1
 for (let i = 0; i < 10; i++) {
  setTimeout(function() {
   		console.log(i);
 	}, 10);
 }

//1.2
 for (var i = 0; i < 10; i++) {
  setTimeout(function() {
   		console.log(i);
 	}(i), 10);
 }

//1.3
 for (var i = 0; i < 10; i++) {
 	(function(i){
 		 setTimeout(function() {
 		  		console.log(i);
 			}, 10);
 		}(i));
 
 }
//2
let result = 0;
let maths = {
	number: 5,
	sum: function(){
		result += this.number;
    	return this;
	},
	minus: function(){
    	result -= this.number;
    	return this;
	},
	multiplay: function(){
		result *= this.number;
    	return this;
	},
	showResult: function(){
      console.log(result);
      return this;
	}
}
maths.sum().sum().multiplay().minus().showResult().sum().showResult();