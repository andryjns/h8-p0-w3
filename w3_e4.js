var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {

// Modifikasi Array
input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
input.splice(4, 1, "Pria", "SMA Internasional Metro" )
console.log(input)


// Ambil & ganti Bulan
var ttl= input[3].split("/")
var bulan= ttl[1]

switch (bulan) {
    case '01': bulan="Januari"; break;
    case '02': bulan="Februari"; break;
    case '03': bulan="Maret";break;
    case '04': bulan="April";break;
    case '05': bulan="Mei";break;
    case '06': bulan="Juni";break;
    case '07': bulan="Juli";break;
    case '08': bulan="Agustus";break;
    case '09': bulan="September";break;
    case '10': bulan="Oktober";break;
    case '11': bulan="November";break;
    case '12': bulan="Desember";break;
    default: bulan='Invalid input';break;
}
console.log (bulan)


// TTL sorting secara descending
ttl.sort(function(value1, value2) { return value2-value1 })
console.log(ttl)


// TTL Join
ttl.shift()
ttl.push('1989')
var ttl= ttl.join("-")
console.log (ttl)


// Slice Nama
var nama= input[1].slice(0,15)
console.log (nama)
}


dataHandling2(input)