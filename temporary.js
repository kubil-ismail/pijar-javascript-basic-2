function myDisplayer(result) {
  console.log(`hasil penjumlahan adalah`, result);

  let modulus = result % 5;

  console.log("modulus", modulus);
}

function myKalkulator(num1, num2, myCallback) {
  let sum = num1 + num2;

  // realita
  myCallback(sum);
}

// penjumlahan
myKalkulator(10, 3, myDisplayer);
