function pasanganTerbesar(num) {

    var array=String(num).split('') //Jadi Array
    //console.log(array)

    for (var i=0; i<array.length-1; i++){
        var pair= array[i]+array[i+1]
        var pairn= Number(pair)
        
        if (x>=pairn) {
            var x= x
        }else {
            var x= pairn
        } 
    }
    return x
}



// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99 