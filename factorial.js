function factorial(num) {
  for (var factorialNumber = 1; num > 0; num--) {
    factorialNumber *= num;
  }
  console.log(factorialNumber);
  return factorialNumber;
}
factorial(5);
