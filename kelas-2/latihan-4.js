function myDisplayer(result) {
  console.log(`hasil penjumlahan adalah`, result);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;

  // realita
  myCallback(sum);
}

function myCalculator2(num1, num2, myCallback) {
  let sum = num1 - num2;

  // realita
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

myCalculator2(5, 5, myDisplayer);
