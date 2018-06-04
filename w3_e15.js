function groupAnimals(animals) {
  
    animals.sort()
    //console.log(animals)

    var newArr=[]
    
    for (var i = 0; i < animals.length-1; i++) {    
        var grup=[]                  // kotak kosong utk grouping
        grup.push(animals[i])

        while (animals[i][0] === animals[i+1][0]) {
            grup.push(animals[i+1])
            if (i === animals.length-2) {
                break;
            }    
            i++
        }
        //console.log(grup) 
        newArr.push(grup)
    }

    if (animals[animals.length-2][0] !== animals[animals.length-1][0]){
        newArr.push([animals[animals.length-1]])
    }
    
    return newArr
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'] , ['unta'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak', 'anjing', 'curut', 'kunang' ]))  //self test  