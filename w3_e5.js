
function palindrome(kata) {

    var max= kata.length-1
    var urut = 0

    while (max>=0){
        var depan= kata[urut]
        var belakang= kata[max]
        urut++
        max--
    }
return depan === belakang
}


  // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false 