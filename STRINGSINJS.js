/*----------------------------Arrays in an Array------------------------*/

let a = "car";
let b = "bus";

//---------.length--------
console.log(a.length);
console.log(b.length);

//---------.charAt()-------
console.log(a.charAt(a[0]));
console.log(a.charAt(b[0]));

//---------.toUpperCase------
console.log(a.toUpperCase(a));
console.log(a.toLowerCase(a));

//-----------.indexOf()------
console.log(a.indexOf("a"));
console.log(b.indexOf("s"));

/*------String Arrays-------------*/

let a = ["string1","string2","string3"];
console.log(a);
let b = new Array("String1","String2","String3");
console.log(b);
console.log(a +"\t"+ b);

/*----------------------------------------------
-----------------SubString----------------------*/

const username = "Shivaraj";
console.log(username.substring(0,6));

/*-----Output---------------------------------
Shivar
-----------------------------------*/

const username = "Shivaraj";
console.log(username.substring(0,6));
let email = "Shivaraj@12"
console.log(email.trim());
let email2 = "Shivaraj@gmail.com"
console.log(email2.replace('Shivaraj','Gandham'));
console.log(email2.includes('Shiva'));

const firstname = 'Shivaraj';
const lastname = 'Gandham';
console.log(firstname+''+lastname);
console.log(`my firstname is ${firstname} is  and my lastname is ${lastname}`);

/*-----------------Output--------------------------------------------------
Shivar
Shivaraj@12
Gandham@gmail.com
true
ShivarajGandham
my firstname is Shivaraj is  and my lastname is Gandham-------------------*/

/*------------------------------------------------------------------------------------*/

const sentence ="The Quick born fox jumps over the lazy dog";
const word ="fox";
console.log(
`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence`,
);

/*-------------------------Output--------------------------------------

-----------------The word "fox" is in the sentence------------*/


