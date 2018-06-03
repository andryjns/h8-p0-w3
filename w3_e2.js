function balikString (kata){

    var rpt$ = ''

    for (i= kata.length-1; i>=0; i--) {
        rpt$ += kata[i]
    } 
    return rpt$
}

console.log (balikString("hello world!"))


//input "hello world!"
//output
//"!dlrow olleh"