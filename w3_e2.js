function balikString (kata){
    var urut = kata.length-1
    var rpt$ = ''

    while (urut>=0){
        rpt$ += kata[urut]
        urut--
    }
    return rpt$
}

console.log (balikString("hello world!"))



//input "hello world!"
//output
//"!dlrow olleh"