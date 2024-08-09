function makeid(l) {
  // write your code here
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
let password=" ";
	for(let i=1;i<=l;i++){
let rand=parseInt(Math.random()*str.length);
		password=password+str[rand];
		
	}
return password;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
