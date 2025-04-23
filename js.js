'use strict'
/*let name ='Mary'
let activity ='drink tea'
let bio = ' our guest '+ name +activity + '.'
console.log(bio.length);*/
/*


const str="it is a long established fact that a reader will be distracted by tl ";
let num= prompt("enter a number of a char");
if (isNaN((num))){
  console.log("Not A Number")
}
else{
  console.log(str.charAt(num));
}*/


/*
const str="it is a long established fact that a reader will be distracted by tl ";
console.log(str [str.length - 2]);
console.log(str [str.length]);*/


/*
const str='abcde';
let str2='';
for(let i=str.length-1 ;i>=0 ;i--)
{
console.log(str[i]);
str2 +=str[i];
}
console.log(str2);*/

/*
const x ='-';
let str='1-2-3-4-5';
while(str.includes(x))
{
  str=str.replace(x,'.');
}
console.log(str);*/

/*
const str = "1-2-3-4-5";
const newStr = str.replaceAll("-", ".");
console.log(newStr); */

/*
const str ="i'm learning javascript!";
console.log(str.slice(4,11));
console.log(str.substring(4,11));
console.log(str.substr(4,9))
console.log(str.slice(13,23));
console.log(str.substring(13, 23));
console.log(str.substr(13, 10));*/

/*
const str = 'http://www.notionString-820cf1e906884d8fb9c02236fe1c6dcb/';
if(str.indexOf('http://')===0){
console.log("the string start with http");
}
else{
  console.log("the string is error");

}*/

/*
const str = 'https://www.notion.html';
if(str.indexOf('.html',str.length-5)){
console.log("the string ends with html");
}
else{
  console.log("the string is error");
}*/

/*
const str='ab cd cd cd ef';
console.log(str.lastIndexOf('cd')); //9
console.log(str.lastIndexOf('cd',8));//6
*/

/*
const str='abcde';
console.log(str.startsWith('abc'));  //true
console.log(str.startsWith('xxxx'));  //false
console.log(str.startsWith('bc',1));  //true
*/


/*
const str='abcde';
console.log(str.endsWith('cde'));  //true
console.log(str.endsWith('xxx'));  //false
console.log(str.endsWith('bc',3));  //true
*/

/*
let str='ab-cd-ef';
console.log(str.split('-')); // (3)[('ab', 'cd', 'ef')];
console.log(str.split('-'),2);  //(3) ['ab', 'cd', 'ef']
console.log(str.split(''));  //(8) ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
console.log(str.split('-'),3);  //(3) ['ab', 'cd', 'ef']

let str2='12345';
console.log(str2.split(''));  //(5) ['1', '2', '3', '4', '5']
*/