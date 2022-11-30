import sqlite3 from 'sqlite3';
import path from 'path';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

import { rl } from '../test2.js';
import kelasJurusan from "../controller/jurusan.js";

export function readJ(callback) {
    db.all('SELECT * FROM Jurusan', (err, rows) => {
        if (err) return console.log('gagal ambil data', err)
        callback(rows);
    })
}

export function searchJ() {
    rl.question(`Masukkan Kode Jurusan:`, (line) => {
        db.get(`SELECT * FROM Jurusan WHERE idjurusan = "${line}"`, (err, row) => {
            if (err) return console.log(`Jurusan dengan kode ${line}, tidak terdaftar`),
                kelasJurusan.cariJurusan();
            console.log(`Detail Jurusan dengan kode '${line}' :`);
            console.log(`Kode Jurusan: ${row.idjurusan}\nNama Jurusan: ${row.jurusan}`);
            console.log("\n===================================================================\n"),
                kelasJurusan.menuJurusan();
        });
    })
}

export function tambahJ() {
    console.log('Lengkapi data di bawah ini :');
    rl.question("Kode Jurusan :", (line) => {
        if (line) {
            rl.question("Nama Jurusan :", (line2) => {
                if (line2) {
                    db.run(`INSERT INTO Jurusan (idjurusan,jurusan) Values ('${line}','${line2}')`)
                    console.log("Jurusan telah ditambahkan ke database");
                    console.log("===================================================================\n"),
                        kelasJurusan.menuJurusan();
                }
            })
        }
    })
}

export function hapusJ() {
    rl.question("Masukkan Kode Jurusan :", (line) => {
        if (line) {
            db.run(`DELETE FROM Jurusan WHERE idjurusan= "${line}"`)
            console.log(`Data Jurusan ${line}, telah dihapus`);
            console.log("===================================================================\n"),
                kelasMahasiswa.menuMahasiswa();
        }
    })
}
