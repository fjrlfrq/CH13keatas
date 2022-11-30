import { hapusmahasiswa, read, seacrh, tambahmahasiswa } from '../models/Mahasiswa.js'
import { daftarmahasiswa } from '../views/Mahasiswa.js'

export function daftarM() {
    read(function (data) {
        daftarmahasiswa(data);
    })
}

export function cariM() {
    seacrh(function (data){
        seacrh(data);
    })
}

export function tambahM() {
    tambahmahasiswa(function (data) {
        tambahmahasiswa(data);
    })
}

export function hapusM() {
    hapusmahasiswa(function (data) {
        hapusmahasiswa(data);
    })
}