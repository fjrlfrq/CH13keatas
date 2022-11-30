import sqlite3 from 'sqlite3';
import path from 'path';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

import { rl } from '../test2.js';
import kelasMataKuliah from "../controller/matakuliah.js";

export function cariMK(callback) {
    db.all('SELECT * FROM MataKuliah', (err, rows) => {
        if (err) return console.log('gagal ambil data', err)
        callback(rows);
    })
}

export function tambahMK() {
    console.log('Lengkapi data di bawah ini :');
    rl.question("Masukkan Kode Mata Kuliah:", (line) => {
        if (line) {
            rl.question("Masukkan Mata Kuliah:", (line2) => {
                if (line2) {
                    rl.question("Masukkan SKS:", (line3) => {
                        if (line3) {
                            db.run(`INSERT INTO MataKuliah (kode,matkul,sks) Values ('${line}','${line2}',${line3})`)
                            console.log("Mata Kuliah telah ditambahkan");
                            kelasMataKuliah.menuMataKuliah();
                        }
                    })
                }
            })
        }
    })
}

export function hapusMK() {
    rl.question("Masukkan Kode Mata Kuliah :", (line) => {
        if (line) {
            db.run(`DELETE FROM MataKuliah WHERE kode="${line}"`),
                console.log(`Data MataKuliah ${line}, telah dihapus`);
            console.log("===================================================================\n"),
                kelasMataKuliah.menuMataKuliah();
        }
    })
}



