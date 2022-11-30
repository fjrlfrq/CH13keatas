import { hapusMK, cariMK, tambahMK } from '../models/matakuliah.js'
import { daftarMataKuliah } from '../views/matakuliah.js'
import Options from './options.js';

import { rl } from '../test2.js';

export default class kelasMataKuliah {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Mata Kuliah');
        console.log('[2] Tambah Mata Kuliah');
        console.log('[3] Hapus Mata Kuliah');
        console.log('[4] kembali');
    }

    static menuMataKuliah() {
        kelasMataKuliah.daftar();
        rl.question("masukkan nomor:", (line) => {
            switch (line) {
                case "1":
                    cariMK(function (data) {
                        daftarMataKuliah(data);
                    })
                    break;
                case "2":
                    tambahMK(function (data) {
                        cariMK(data);
                    })
                    break;
                case "3":
                    hapusMK(function (data) {
                        hapusMK(data);
                    })
                    break;
                case "4":
                    Options.menu();
                    break;

            }
        })
    }
}