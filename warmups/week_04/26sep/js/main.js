/*
The Sieve of Eratosthenes

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

Create your range, starting at two and ending at the given limit.

The algorithm consists of repeating the following over and over:

take the next available unmarked number in your list (it is prime)
remove all the multiples of that number (they are not prime)
Repeat until you don't have any possible primes left in your range.

When the algorithm terminates, all the numbers in the list that have not been removed are prime.

Do this in Javascript!
*/


//range: 2 - 120,
// var i, j;
//
// var n = 20000;
// var prime = new Array(n);
//
// for ( i = 2; i < n; i ++ ) prime[i] = true;
//
// for ( i = 2; i * i < n ; i++ ) {
//   if ( prime[i] ) {
//     for ( j = 0; i * i + i * j < n; j++ ) {
//         prime[ i * i + i * j ] = false;
//     }
//   }
// };
//
// for ( i = 2; i  < n; i++ ) {
//   if ( prime[i] ){
//     console.log(i);
//   }
// };


// Luke's version

var sieve = {

  nums: [],
  counter: 0,

  calculate_primes: function( max ){

    for (var i = 0; i < max; i++) {
      this.nums[i] = true;
    }

    for (var i = 2; i < this.nums.length; i ++) {

      var currentNum = i;

      for (var j = currentNum + 1; j< this.nums.length; j++) {
        this.counter++
        if( this.nums[j] === true && j % currentNum === 0) {
          this.nums[j] = false;
        }
      }
    }

    for (var i = 0; i < this.nums.length; i++) {
      if ( this.nums[i] === true ) {
        console.log(i);
      }
    }

    console.log('iterations: ', this.counter);

  } // end of function
};// End of method


sieve.calculate_primes(10000)
