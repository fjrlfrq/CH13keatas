import { hapusmahasiswa, read, seacrh, tambahmahasiswa } from '../models/Mahasiswa.js'
import { daftarmahasiswa } from '../views/Mahasiswa.js'
import Options from './options.js';

import { rl } from '../test2.js';
export default class kelasMahasiswa {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Mahasiswa');
        console.log('[2] Cari Mahasiswa');
        console.log('[3] Tambah Mahasiswa');
        console.log('[4] Hapus Mahasiswa');
        console.log('[5] kembali');
    }

    static menuMahasiswa() {
        kelasMahasiswa.daftar();
        rl.question("Masukkan salah satu nomor dari opsi di atas:", (line) => {
            switch (line) {
                case "1":
                    read(function (data) {
                        daftarmahasiswa(data);
                    })
                    break;
                case "2":
                    seacrh(function (data) {
                        seacrh(data);
                    })
                    break;
                case "3":
                    tambahmahasiswa(function (data) {
                        tambahmahasiswa(data);
                    })
                    break;
                case "4":
                    hapusmahasiswa(function (data) {
                        hapusmahasiswa(data);
                    })
                    break;
                case "5":
                    Options.menu();
                    break;
                default:
                    kelasMahasiswa.menuMahasiswa();
                    break;
            }
        })
    }
}