import { read } from '../models/jurusan.js'
import { drawJurusan } from '../views/jurusan.js'

//SELECT MAHASISWA
export function showJurusan() {
    read(function (data) { //anonymous function = function no name
        drawJurusan(data);
    })
}