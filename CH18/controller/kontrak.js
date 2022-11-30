import { hapusK, readK, cariK, tambahK, updateK } from '../models/kontrak.js'
import { daftarKontrak } from '../views/kontrak.js'
import Options from './options.js';

import { rl } from '../test2.js';
export default class kelasKontrak {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Kontrak');
        console.log('[2] Cari Kontrak');
        console.log('[3] Tambah Kontrak');
        console.log('[4] Hapus Kontrak');
        console.log('[5] Update Nilai');
        console.log('[6] kembali');
    }

    static menuKontrak() {
        kelasKontrak.daftar();
        rl.question("Masukkan salat satu nomor dari opsi di atas:", (line) => {
            switch (line) {
                case "1":
                    readK(function (data) {
                        daftarKontrak(data);
                    })
                    break;
                case "2":
                    cariK(function (data) {
                        cariK(data);
                    })
                    break;
                case "3":
                    tambahK(function (data) {
                        tambahK(data);
                    })
                    break;
                case "4":
                    hapusK(function (data) {
                        hapusK(data);
                    })
                    break;
                case "5":
                    updateK(function (data) {
                        updateK(data);
                    })
                    break;
                case "6":
                    Options.menu();
                    break;
                default:
                    kelasKontrak.menuKontrak();
                    break;
            }
        })
    }
}