import { read } from '../models/matakuliah.js'
import { drawMataKuliah } from '../views/matakuliah.js'

//SELECT MAHASISWA
export function showMataKuliah() {
    read(function (data) { //anonymous function = function no name
        drawMataKuliah(data);
    })
}