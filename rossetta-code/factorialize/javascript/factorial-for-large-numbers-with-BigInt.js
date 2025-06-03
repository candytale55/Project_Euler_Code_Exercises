// Handles factorials above ~170 (where normal JS numbers overflow)
// Regular Number can't represent large factorials accurately. BigInt allows arbitrary precision.

function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(0));  // 1n
console.log(factorial(1));  // 1n
console.log(factorial(3));  // 6n
console.log(factorial(5));  // 120n
console.log(factorial(10)); // 3628800n
console.log(factorial(170)); //7257415615307998967396728211129263114716991681296451376543577798900561843401706157852350749242617459511490991237838520776666022565442753025328900773207510902400430280058295603966612599658257104398558294257568966313439612262571094946806711205568880457193340212661452800000000000000000000000000000000000000000n
