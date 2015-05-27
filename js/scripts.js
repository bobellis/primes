var prime = function(number){
  var numbers = []

  for (var i = 2; i <= number; i++) {
   numbers.push(i);
  }

  var primes = numbers.slice();

  var finalprimes = [2,3,5,7]

for (var index = 0; index <= numbers.length; index++){
  if (numbers[index] % 2 === 0){

    var indexOf = primes.indexOf(numbers[index]);
    primes.splice(indexOf,1);
  }

  else if (numbers[index] % 3 === 0){

    var indexOf = primes.indexOf(numbers[index]);
    primes.splice(indexOf,1);
  } else if (numbers[index] % 5 === 0){

    var indexOf = primes.indexOf(numbers[index]);
    primes.splice(indexOf,1);
  } else if (numbers[index] % 7 === 0){

    var indexOf = primes.indexOf(numbers[index]);
    primes.splice(indexOf,1);
  }



}
debugger;

  var a = finalprimes += primes
  return a.join(" ");
};







// for (var i = 0; i <= numbers.length; i++) {
//   for(var t = 0; t <= primes.length; t++){
//     if((numbers[i] % primes[t] === 0 ) && (numbers[i] != primes[t])){
//     }else{
//     var b =  primes.splice[t,1];
//     }
//
//    }
// }
