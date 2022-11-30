import { rl } from '../test2.js';

import Login from '../test2.js';
import kelasMahasiswa from './Mahasiswa.js';
import kelasJurusan from './jurusan.js';
import kelasKontrak from './kontrak.js';
import kelasMataKuliah from './matakuliah.js';
import kelasDosen from './dosen.js';

export default class Options {
    static daftar() {
        console.log("===================================================================");
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Mahasiswa');
        console.log('[2] Jurusan');
        console.log('[3] Dosen');
        console.log('[4] Mata Kuliah');
        console.log('[5] Kontrak');
        console.log('[6] Keluar');
        console.log("===================================================================");
    }

    static menu() {
        Options.daftar();
        rl.question("masukkan salah satu nomor dari opsi di atas:", (line) => {
            switch (line) {
                case "1":
                    kelasMahasiswa.menuMahasiswa();
                    break;
                case "2":
                    kelasJurusan.menuJurusan();
                    break;
                case "3":
                    kelasDosen.menuDosen();
                    break;
                case "4":
                    kelasMataKuliah.menuMataKuliah();
                    break;
                case "5":
                    kelasKontrak.menuKontrak();
                    break;
                case "6":
                    Login.Masuk();
                    break;
                default:
                    Options.menu();
            }
        })
    }
}