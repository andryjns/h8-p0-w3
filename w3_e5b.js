
function palindrome(kata) {

    var terbalik= kata.split('').reverse().join('')
    //console.log(terbalik)
    return kata === terbalik
}


  // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false 