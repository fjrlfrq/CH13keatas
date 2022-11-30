// import { read } from '../models/Mahasiswa.js'
// import { drawMahasiswa } from '../views/Mahasiswa.js'

// //SELECT MAHASISWA
// export function showMahasiswa() {
//     read(function (data) { //anonymous function = function no name
//         drawMahasiswa(data);
//     })
// }

import { read } from '../models/Mahasiswa.js'
import { daftarmahasiswa } from '../views/Mahasiswa.js'

export function daftarM(){
    read(function (data) {
        daftarmahasiswa(data);
    })
}