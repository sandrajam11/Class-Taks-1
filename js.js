const sandraObj = { firstname: 'Celine', lastname: 'Jammal' };
const hossenObj = { firstname: 'Hossen', lastname: 'Yassen' };
console.log(sandraObj.firstname);
console.log(sandraObj.lastname);
console.log(hossenObj.firstname);
console.log(hossenObj.lastname);

const namesArr = ['Robert', 'Ronaldo', 'Dan'];

for (let i = 0; i < namesArr.length; i++) {
  console.log(namesArr[i]);
}



let name =prompt("what is your name?", "celine");
alert("Your name is " + name);


let product = confirm('do you wan to remove this product?');
if(product){
  alert("The product has removed");
}
else{
  alert('The product remains');
}
