

//vowels word 

var input = "mugeshkumar";
input = input.toLowerCase();
var count =0;
// console.log(input[1]);
for(let i=0; i<input.length; i++){
  if(input[i]=="a" ||input[i]=="e" ||input[i]=="i" ||input[i]=="o" ||input[i]=="u" ){
             count ++;
  }
 
}
console.log(count);
