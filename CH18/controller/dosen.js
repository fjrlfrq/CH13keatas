import { readD, tambahD, hapusD } from '../models/dosen.js'
import { daftarDosen } from '../views/dosen.js'
import Options from './options.js';

import { rl } from '../test2.js';
export default class kelasDosen {
    static daftar() {
        console.log("===================================================================");
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Dosen');
        console.log('[2] Tambah Dosen');
        console.log('[3] Hapus Dosen');
        console.log('[4] kembali');
        console.log("===================================================================");
    }

    static menuDosen() {
        kelasDosen.daftar();
        rl.question("masukkan nomor:", (line) => {
            switch (line) {
                case "1":
                    readD(function (data) {
                        daftarDosen(data);
                    })
                    break;
                case "2":
                    tambahD(function (data) {
                        tambahD(data);
                    })
                    break;
                case "3":
                    hapusD(function (data) {
                        hapusD(data)
                    })
                    break;
                case "4":
                    Options.menu();
                    break;

            }
        })
    }
}