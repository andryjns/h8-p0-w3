function tentukanDeretAritmatika(arr) {

    for (var i= 0; i < arr.length-2; i++) {
        var dif1= arr[i+1]-arr[i]
        var dif2= arr[i+2]-arr[i+1]
        //console.log(dif1)
        //console.log(dif2) 

        var x= dif1===dif2
        //console.log(x)

        if (x === false){
            i= arr.length
        }
    }  
    return x
}  
    
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
 


   