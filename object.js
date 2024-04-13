const user = {
    username:"hc",
    name:"Shiva",
    email:"Shiva@gmail.com",
    age:20,
    isAdmin: true,
    isLoggedIn:false,
    tea:["lemon","peach","ginger"],
    address:{
        city:"Hyd",
        state:"Telangana"
    }
 }

const anotherUser = user;

 console.log(user.age);
 console.log(user['age']);
 console.log(user['tea']);
 console.log(user.address.state);
 console.log(user["address"]["state"]);
 user.email="shivaraj@gmail.com"
 console.log(user);
 console.log(anotherUser);

 delete user.isAdmin
 console.log(user);

/*-------------------------------------------------------------------------*/

 const user = {
    username:"hc",
    name:"Shiva",
    email:"Shiva@gmail.com",
    age:20,
    isAdmin: true,
    isLoggrdIn:false,
    tea:["lemon","peach","ginger"],
    address:{
        city:"Hyd",
        state:"Telangana"
    }
 }
 const anotherUser = user;
 console.log(user.age);
 console.log(user['age']);
 console.log(user['tea']);
 console.log(user.address.state);
 console.log(user["address"]["state"]);

 user.email = "shivarajgandham@.in"
 console.log(user);
 console.log(anotherUser);
 delete user.isAdmin
 const userListofFromDatabase=[{},{},{}]
 console.log(user.hasOwnProperty('tea'));
 console.log(Object.keys(user));