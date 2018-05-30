var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    
var max = input.length-1
var urut = 0

    while (max>=0){

        var nomor = input [urut][0]
        var nama = input [urut][1]
        var tempat = input [urut][2]
        var tanggal = input [urut][3]
        var hobi = input [urut][4]

        console.log ('Nomor ID: '+nomor)
        console.log ('Nama Lengkap: '+nama)
        console.log ('TTL: '+tempat+ ' ' +tanggal)
        console.log ('Hobi: '+hobi)
        console.log ()

        urut++
        max--
    } 
}

dataHandling(input) 



/*
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca*/