/*--------------------------------
 Giving input in output 

      ----- const input_name = prompt();   ------*/

const a = prompt();
const b = prompt();
const c = prompt("Enter c:");

if(a>b){
    console.log("a is greater than b");
}
else if(c>b){
    console.log("b is greater than c");
}
else {
    console.log("is bigger b ");
}

/*-------------------------------------------------------

  --------------switch statement-------------------------*/

const a = prompt();
switch(true){
    case a%2==0:
        console.log("a is even");
        break;
    case a%2!=0:
        console.log("a is odd");
        break;
    default :
    console.log("404 error page not found..!");
    break;
}

/*------------------------------------------------------------
------------------using parseInt-------------------------*/
  const a = parseInt(prompt());
switch(a){
    case 10:
        console.log("Given is 10");
        break;
    case 20:
        console.log("Given is 20");
        break;
    default :
    console.log("404 error page not found..!");
    break;
}






