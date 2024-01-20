//Object Literal

//in simple languange object literal is purely object

const user = {
    username: "Zaid",
    loginCount: 5,
    signedIn: true,

    getuserDetails: function () {
        console.log('Get user details');
       console.log(`username:${this.username}`);
    },
}

console.log(user.username);
console.log(user.getuserDetails);



//construnter

//const promiseOne = new Promise() 
//what is new -> new is a constructer function that allow to make multiple instances from only one object
//use of this for build new context

function User(username,logincount,isloggedin){
   //this is our variable 1st
    this.username = username;
    this.loginCount = logincount;
    this.isloggedin = isloggedin;



}

var userOne = User("hitesh",12,true)
console.log(userOne);

var userTwo = User("zaid",13,true);

//thsi code is overridden
// instead of this just writer "this" keyword

var userOne = new User("chai aur code",12,true);
console.log(userOne);

var userTwo = new User("zaid",12,false)
console.log(userTwo);