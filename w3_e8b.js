function pasanganTerbesar(num) {

    var array= String(num).split('') //Jadi Array
    var arrpair= [] 

    for (var i=0; i<array.length-1; i++){
        var pair= array[i]+array[i+1]
        var pairn= Number(pair)
        
        arrpair.push(pairn)        
    }
    console.log(arrpair)
    
    var max = Math.max(...arrpair);    
    return max
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99 