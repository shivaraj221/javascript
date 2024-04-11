/*--------------------------Function in Js-----------------------------------

------------------------------Blocked Scope--------------------------*/

a=8
if(a>3){
    console.log("in");
    let a=10;
    console.log(a); // This a=10 itself get printed as it is inside the function 
}

/*Output :
in
10
-------------------------------------------------------------------------------

------------------------------Function Scope--------------------------*/

function fn()
{
    var a=20;
    console.log(a);
}
fn();
console.log("out side a value"+a);

/*Output:
20
ERROR!
/tmp/VtTRlUvi2Z.js:7
console.log("out side a value"+a);
                               ^

ReferenceError: a is not defined
    at Object.<anonymous> (/tmp/VtTRlUvi2Z.js:7:32)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49


------------------------------Global Scope--------------------------*/

let a =20;
function fn()
{
    console.log("inside a value"+a);
}
fn();
console.log("out side a value"+a);

/*  OutPut :

inside a value20
out side a value20

----------------------------------------------------------------------------*/




