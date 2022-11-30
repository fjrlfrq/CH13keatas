import { hapusJ, readJ, searchJ, tambahJ } from '../models/jurusan.js'
import { daftarJurusan } from '../views/jurusan.js'
import Options from './options.js';

import { rl } from '../test2.js';
export default class kelasJurusan {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Jurusan');
        console.log('[2] Cari Jurusan');
        console.log('[3] Tambah Jurusan');
        console.log('[4] Hapus Jurusan');
        console.log('[5] kembali');
    }

    static menuJurusan() {
        kelasJurusan.daftar();
        rl.question("masukkan nomor:", (line) => {
            switch (line) {
                case "1":
                    readJ(function (data) {
                        daftarJurusan(data);
                    })
                    break;
                case "2":
                    searchJ(function (data) {
                        searchJ(data);
                    })
                    break;
                case "3":
                    tambahJ(function (data) {
                        tambahJ(data);
                    })
                    break;
                case "4":
                    hapusJ(function (data) {
                        hapusJ(data);
                    })
                    break;
                case "5":
                    Options.menu();
                    break;
                default:
                    kelasJurusan.menuJurusan();
                    break;
            }
        })
    }
}