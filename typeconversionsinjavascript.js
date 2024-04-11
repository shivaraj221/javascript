/*Impilicit type conversion automatically convert one datatype into another datatype[]
Explicit type conversion in which manually we convert one datatype into another datatype[]
=> Implicit type conversions
--------------------------------------------------------------------------
1. Implicit type conversion to strings*/

var result;
result = '3'+5;
console.log(result);

/*converting number to string automatically

  output=35
------------------------------------------------------------------
2. Implicit type conversion to numbers  */

var result;
result = '3'+'5';
console.log(result);

/*converting number to string automatically

output = 8
------------------------------------------------------------------------
3. Impilict type conversion Boolean to numbers*/

var result ;
result = 3 + true;  //Here true value is 1 and false value is 0
console.log(result);

/*Converting boolean to numbers

output = 4
------------------------------------------------------------------------
4. Impilict type conversion Boolean to string*/

var result ;
result = '3' + true;  
console.log(result);

//converting boolean to string

/*Output = 3true
============================================================================================================================================
Explicit type conversion

----------------------------------------------------------------------------
1.Converting num explicitly*/

var result = '35';
result = num(result);
console.log(result);
console.log(typeof(result));

/* Output :
70
number
*/
----------------------------------------------------------------------------
//2.Converting other datatypes to string

var result = 35;
result = String(result);
console.log(result);
console.log(typeof(result));

/*output :
35
string*/
--------------------------------------------------------------------------------
//Converting other datatypes to Boolean

var result ;
result = Boolean(1); //Here 1 indicates that its True
console.log(result);
console.log(typeof(result));

/*Output :
true
boolean
*/

var result ;
result = Boolean(0); //Here 0 indicates that its False
console.log(result);
console.log(typeof(result));

/*Output :
false
boolean
*/
------------------------------------------------------------------------------------------


------------->Parse Int<--------------

let result =20.9;
console.log(parseInt(result));

//parsint is used to make value into int from float

/* Output :
20    */

-----------------------------------------

--------------->ParseFloat<--------------

let result =20.9;
console.log(parseFloat(result));

//parseFloat is used to show in float if it is in float it shows in float if it is in int shows as an integer

//output : 20.9

-----------------------------------------

------------->Math.floor<----------------

let result =20.9;
console.log(parseFloat(result));

//output : 20

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



 
