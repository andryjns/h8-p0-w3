function targetTerdekat(arr) {

    var arrO= []
    var arrX= []
    
    for (var i = 0; i < arr.length; i++) {       // cari 'o' di index berapa
        if (arr[i] === 'o') {
            arrO.push(i)
        }
    }

    for (var i = 0; i < arr.length; i++) {       // cari 'x' di index berapa saja
        if (arr[i] === 'x') {
            arrX.push(i)
        }
    }
    
      // console.log (arrO)
      // console.log (arrX)
    
    if (arrX.length === 0) {
        arrX=arrO
    } 

    for (var i = 0; i < arrX.length; i++) {
        var jarak= Math.abs(arrX[i]-arrO[0])
        
        if (z<= jarak) {
            var z = z
        } else {
            var z = jarak
        }
    
    }
    return z
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2