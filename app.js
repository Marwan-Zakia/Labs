
//  var userName = 'user';

//  var userName = prompt('Whats your name ?');
//  alert("welcome to my badly stylized site " + userName)
let userName = prompt('please enter your name');
let surName = prompt('please enter your surname');
 alert('welcome');
 function printuserName(userName, surName){
    console.log ('welcome ',userName, surName);
  document.write(`hello <b> ${userName} </b> ${surName} <br>`)
 }
printuserName(userName, surName);


 var favPhone = prompt('What is your smartphone?');

 if (favPhone === "iphone") {
   document.write('<p> why? you like unnecessary expensive stuff.. sure.  </p>')
 } else if (favPhone === "samsung") {
  document.write('<p> wrong!!! pixel is better </p>')
 } else if (favPhone === "mi") {
  document.write('<p>like spywere hah? </p>')
 } else {
   alert('why not? ')
 }

var password = prompt("please enter the password which is 123456");
console.log(password);
while (password != "123456") {
  password = prompt(" please enter password which is 123456");
}

//var starRating =['1','2','3','4','5'];
var starRating = prompt('please from 0 to 5 how do you rate me ')
for (var i = 0; i < starRating; i++) {

  //if (starRating[i] < '5') {
   // break;
  //}
  console.log(starRating[i])
  document.write('<img src="https://png.pngtree.com/png-clipart/20201106/ourmid/pngtree-cute-five-pointed-star-clipart-png-image_2395207.jpg" width=20px/>');
}
