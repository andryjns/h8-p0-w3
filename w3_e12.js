function tentukanDeretGeometri(arr) {

    for (var i= 0; i < arr.length-2; i++) {
        var dif1= arr[i+1]/arr[i]
        var dif2= arr[i+2]/arr[i+1]
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
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false