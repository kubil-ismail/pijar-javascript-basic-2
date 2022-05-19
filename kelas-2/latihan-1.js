// ES 5 DECLARATION

// hoisted = mengangkat
doStuff(); // execute

// ES 5 EXPRESSION
const anotherDoStuff = function () {
  console.log("hello world 2");
};

anotherDoStuff(); // execute

// // ES 6
var otherStuff = () => {
  console.log("hello world");
};

const otherStuff2 = () => console.log("hello world");
const otherStuff3 = (params1, params2) => console.log(params1 + params2);
const otherStuff4 = (params) => params + 5;

// return
const addition = (num1, num2) => {
  const total = num1 + num2;

  //   untuk mengakhiri / mengembalikan nilai pada function
  return total;
};

// execute function
console.log(addition(1, 2));

// Self Infoking
(function () {
  console.log("hello world");
})();

// CHECK FOR MORE INFO : https://medium.com/@zac_heisey/es5-vs-es6-functions-cb51536002ee

function doStuff() {
  console.log("hello world");
}
