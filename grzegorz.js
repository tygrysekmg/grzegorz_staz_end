var kot = Math.random();
var kot1 = kot * 20;
var kot2 = Math.floor(kot1);

console.log(kot2);

var z1 = ['l','e','w'];
var z2 = [ 't','g','r','y','s'];
var z3 = ['z','e','b','r','a'];
var z4 = ['k','o','t'];
var z5 = ['s','o','w','a'];
var z6 = ['a','n','t','y','l','o','p','a'];
var z7  = ['g','e','p','a','r','d'];
var z8 = ['p','i','e','s']
var z9 = ['p','a','p','u','g','a'];
var z10 = ['p','y','t','h','o','n'];
var z11 = ['o','w','c','a'];
var z12 = ['m','y','s','z'];
var z13 = ['s','z','c','z','u','r'];
var z14 = ['k','o','z','a'];
var z15 = ['l','i','s'];
var z16 = ['p','n','d','a'];
var z17 = ['a','l','c','z','y','k'];
var z18 = ['a','m','u','r'];
var z19 = ['b','a','r','i','b','a','l'];
var z20 = ['b','o','r','s','u','k'];

if ( kot2 == z1 ){
console.log(kot2);
  
} else if (kot2 == z2 ) {
  console.log(kot2);

  
} 

z20.forEach(function(element,index) {
  console.log(element);
  var readline = require('readline-sync');

var name = readline.question("Podaj wyraz?");

  if (element == name) {
    console.log("prawidłowo");
   } else if ( element != name ){
	   console.log("niprwidłowy wyraz");
   }
  
});




