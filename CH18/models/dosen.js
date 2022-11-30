import sqlite3 from 'sqlite3';
import path from 'path';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

import { rl } from '../test2.js';
import kelasDosen from "../controller/dosen.js";

export function readD(callback) {
    db.all('SELECT * FROM Dosen', (err, rows) => {
        if (err) return console.log('gagal ambil data', err)
        callback(rows);
    })
}

export function tambahD() {
    console.log("===================================================================");
    console.log('Lengkapi data di bawah ini :');
    rl.question("Masukkan NIP:", (line) => {
        if (line) {
            rl.question("Masukkan Nama Dosen:", (line2) => {
                if (line2) {
                    db.run(`INSERT INTO Dosen (nip,dosen) Values ('${line}','${line2}')`)
                    console.log("Dosen telah ditambahkan");
                    kelasDosen.menuDosen();
                }
            })
        }
    })
}

export function hapusD() {
    console.log("===================================================================");
    rl.question("Masukkan NIP:", (line) => {
        if (line) {
            db.run(`DELETE FROM Dosen WHERE nip="${line}"`),
                console.log(`Data Dosen ${line}, telah dihapus`);
                kelasDosen.menuDosen();
        }
    })
}