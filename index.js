// Belajar variable, if, dan switch
// let nama = 'dea afrizal'
// let usia = 30
// let tinggiBadan = 173.5
// let beratBadan
// let hobi = 1

// beratBadan = 60

// if(hobi == null){
//   hobi = 'tidak ada'
// } else {
//   hobi = 'ada'
// }

// let saldoAwal = 5000
// let saldoTambahan = 2000
// const hutang = 4000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang 

// // switch(hobi){
// //   case 1:
// //     hobi = 'ada'
// //     break
// //   case 2:
// //     hobi = 'ada 2'
// //     break
// //   default:
// //     hobi = 'tidak ada'
// //     break
  
// // }

// alert(`nama saya adalag ${nama} usia saya ${usia} tahun, tinggi badan saya ${tinggiBadan} cm, berat badan saya ${beratBadan}, hobi saya adalah ${hobi}`)
// alert(`saldo awal saya adalah ${saldoAwal}, saldo tambahan saya adalah ${saldoTambahan}, jadi total saldo saya adalah ${saldoAkhir}`)



// Belajar array
// let namaGuru = ['jodi', 'bunga', 'rahman']
// namaGuru.push ('dea','fikri')
// namaGuru.shift()
// namaGuru.pop()
// alert (namaGuru)

// let namaGuru = [] 
// namaGuru[0] = 'jodi'
// namaGuru[1] = 'bunga'
// alert(namaGuru)

// for loop \

// for (let i = 1; i <= 5; i++) {
//   console.log("Halo ke-" + i);
// }

// for(let i = 0; i <= 10; i+=1) {
//   console.log('dea afrizal');
// }


// Sistem Kelulusan
// let kkm = 85
// let totalKehadiran = 80
// let nilai = prompt('Masukkan nilai Anda: ');
// let kehadiran = prompt('Masukkan kehadiran anda: ');

// if (nilai >= kkm && kehadiran >= totalKehadiran) {
//   alert('Selamat, Anda lulus!');
// } else if (nilai >= kkm && kehadiran <= totalKehadiran) {
//   alert('Anda lulus, tetapi kehadiran anda kurang, di tingkatkan!.');
// } else if (nilai <= 70 && nilai >= 60 && kehadiran >= totalKehadiran) {
//   alert('Anda lulus, tetapi nilai anda kurang.');
// } else {
//   alert('Maaf, Anda tidak lulus.');
// }


// Mencari Nama Bulan
// let bulan = prompt('Masukkan Bulan (1-12): ');

// switch(bulan) {
//   case '1':
//     alert('Januari');
//     break;
//   case '2':
//     alert('Februari');
//     break;
//   case '3':
//     alert('Maret');
//     break;
//   case '4':
//     alert('April');
//     break;
//   case '5':
//     alert('Mei')
//     break;
//   case '6':
//     alert('Juni')
//     break;
//   case '7':
//     alert('Juli')
//     break;
//   case '8':
//     alert('Agustus')
//     break;
//   case '9':
//     alert('September')
//     break;
//   case '10':
//     alert('Oktober')
//     break;
//   case '11':
//     alert('November')
//     break;
//   case '12':
//     alert('Desember')
//     break;
//   default:
//     alert('Unknown')
//     break;

// }


// Belajar function
// function perhitunganPersegi(a,b) {
//   var total;
//   total = a * b;
//   console.log(total)
// }

// perhitunganPersegi(prompt('Masukkan lebar'), prompt('Masukkan panjang'))


// Menghitung Diskon
// let harga = prompt('Masukkan Harga')
// let jumlah = prompt('Masukkan Jumlah Barang')
// let diskon = prompt('Masukkan Diskon')

// if (diskon < 1 || diskon > 100) {
//   alert('Masukkan Dison yang benar!')
// } else {
//   function Kasir(harga, jumlah, diskon) {
//     let totalHarga;
//     let jumlahDiskon;


//     totalHarga = harga * jumlah;
//     jumlahDiskon = totalHarga * (diskon / 100)
//     return totalHarga - jumlahDiskon
//   }
// }

// alert('Total harga yang harus dibayar adalah: ' + Kasir(harga, jumlah, diskon))


// // Method Pada Array
// let arr = ['Sandhika', 'Galih', 'Nofa', 'Galeng']
// 1.join 
// mengubah menjadi string
// console.log(arr.join())

// 2. push & pop
// menambah & mengurangi di akhir
// arr.push('Doddy', 'Fitri')
// arr.pop()
// arr.pop()
// console.log(arr.join())

// 3.unshift & shift
// menambah & mengurangi di awal
// arr.unshift('Doddy')
// arr.shift()

// 4.splice 
// menambah di tengah tengah
// splice(IndexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Doddy')
// console.log(arr.join())

// 5.slice 
// mengiris sebuah array menjadi array baru 
// slice(awal,akhir)
// let arr2 = arr.slice(1,3)
// console.log(arr2)