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

let a1 = ["string1","string2","string3"];
console.log(a);
let b1 = new Array("String1","String2","String3");
console.log(b);
console.log(a +"\t"+ b);

//SubString
const username = new String("Shivaraj")
console.log(username.substring(0,4));


