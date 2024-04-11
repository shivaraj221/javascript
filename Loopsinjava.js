/*---------------While Loops-------------------------------*/
let a=1;
while(a<5){
console.log("a ="+a);
a++
}
/* Output:
a =1
a =2
a =3
a =4

---------------------------------------------------------------*/

let a=1;
const n= prompt();
while(a<n){
console.log("a ="+a);
a++
}

/* Output :
5
a =1
a =2
a =3
a =4 
------------------------------------------------------------------*/

let a=6;
const n= prompt();
while(a>=n){
console.log("a ="+a);
a--
}

/* Output:
1
a =6
a =5
a =4
a =3
a =2
a =1
------------------------------------------------------------------------*/

/*--------------------------------DO WHILE LOOP--------------------*/

let a=6;
const n= prompt();
do{
console.log("a ="+a);
a--
}
while(a>=n);  //semi colon is compulsory here...................

/*------------------Output----------------------------
1
a =6
a =5
a =4
a =3
a =2
a =1 --------------------------------------------------

-----------For Loop---------------------------------------------*/

const n = prompt();
for(i=0;i<n;i++){
    console.log(i);
}

/*---------------Output---------------------------
6
0
1
2
3
4
5   ----------------------------------------------*/

/*--------------------Jump Statements-----------------------*/

const n = prompt();
const k = prompt();
const y = prompt();
for(i=0;i<=n;i++){
    if(i==k){
        console.log("continue is occured");
        continue;
    }
     if(i==y){
        console.log("break is occured");
        break;
    }
    console.log("page"+i);
    
}

/*
Output
50
7
10
page0
page1
page2
page3
page4
page5
page6
continue is occured
page8
page9
break is occured
---------------------*/









