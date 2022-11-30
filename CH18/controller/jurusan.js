import { readJ } from '../models/jurusan.js'
import { daftarJurusan } from '../views/jurusan.js'

export function daftarJ() {
    readJ(function (data) {
        daftarJurusan(data);
    })
}