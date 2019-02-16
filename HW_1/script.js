// 1 
var a = 'it\'s beautiful day.',
    b = 'I like \"free day\"',
    c = "it\'s beautiful day."  ,
    d = "I like \"free day\"";
console.log('it\'s beautiful day. I like \"free day\"');
console.log("it\'s beautiful day. I like \"free day\"");
console.log("it\'s beautiful day. I like \'free day\'");
console.log(a+b);
console.log(c+d);

//2 
product();
function product(){
	var a = 5.45, 
	    b = 8.3,
	    c = Math.round(45.235);
	console.log( Math.round(a * b) ===  c );
};    
//3 
console.log(Number( "string") + 2 );