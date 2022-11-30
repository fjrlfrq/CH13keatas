import { read } from '../models/dosen.js'
import { drawDosen } from '../views/dosen.js'

//SELECT MAHASISWA
export function showDosen() {
    read(function (data) { //anonymous function = function no name
        drawDosen(data);
    })
}