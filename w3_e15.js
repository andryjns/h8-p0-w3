function groupAnimals(animals) {

    animals.sort()
   
    var newArr=[]
    
    for (var i = 0; i < animals.length-1; i++) {
        var kantong= []           //kantong kosong :)
        kantong.push (animals[i])
        
        if (animals[i][0] === animals[i+1][0]) {
            
            kantong.push (animals[i+1])
            i++
        }
           
       // console.log(kantong) 
        newArr.push(kantong)
    }
    if (animals[animals.length-2][0] !== animals[animals.length-1][0] )
        newArr.push([animals[animals.length-1]])

    return newArr
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));