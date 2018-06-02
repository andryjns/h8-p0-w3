
function angkaPalindrome(num) {
   
    var x= 1

    while (x<0 || x>0) {
        num++
        var num$= num.toString()
        var numrev= num$.split('').reverse().join('');  //reverse angkanya
        var x = Number(num$)-Number(numrev)             // if Palindrome, then should be 0
    }
    return num
}    


  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001 