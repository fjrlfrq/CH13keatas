import { read } from '../models/kontrak.js'
import { drawKontrak } from '../views/kontrak.js'

//SELECT MAHASISWA
export function showKontrak() {
    read(function (data) { //anonymous function = function no name
        drawKontrak(data);
    })
}