import sqlite3 from 'sqlite3';
import path from 'path';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

import { rl } from '../test2.js';
import kelasMahasiswa from "../controller/Mahasiswa.js";
import { daftarM } from '../controller/Mahasiswa.js'

export function read(callback) {
    db.all('SELECT * FROM Mahasiswa', (err, rows) => {
        if (err) return console.log('gagal ambil data', err)
        callback(rows);
    })
}

export function seacrh() {
    console.log("===================================================================");
    rl.question(`Masukkan NIM Mahasiswa:`, (line) => {
        db.get(`SELECT * FROM Mahasiswa WHERE nim = ${line}`, (err, row) => {
            if (err) return console.log(`Mahasiswa dengan nim ${line}, tidak terdaftar`),
                kelasMahasiswa.menuMahasiswa();
            console.log("===================================================================");
            console.log(`Detail mahasiswa dengan NIM '${line}' :`);
            console.log(`NIM     : ${row.nim}\nNama    : ${row.mahasiswa}\nAlamat  : ${row.alamat}\nJurusan : ${row.jurusan}\n`);
            kelasMahasiswa.menuMahasiswa();
        });
    })
}

export function tambahmahasiswa() {
    console.log('Lengkapi data di bawah ini :');
    rl.question("NIM          :", (line) => {
        if (line) {
            rl.question("Nama         :", (line2) => {
                if (line2) {
                    rl.question("Tanggal Lahir:", (line3) => {
                        if (line3) {
                            rl.question("Alamat       :", (line4) => {
                                if (line4) {
                                    rl.question("Kode Jurusan :", (line5) => {
                                        if (line5) {
                                            rl.question("Jurusan      :", (line6) => {
                                                if (line6) {
                                                    db.run(`INSERT INTO Mahasiswa (nim,mahasiswa,Ttl,alamat,idjurusan,jurusan) Values ('${line}','${line2}','${line3}}','${line4}','${line5}','${line6}')`)
                                                    console.log("Mahasiswa telah ditambahkan");
                                                    kelasMahasiswa.menuMahasiswa();
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

export function hapusmahasiswa() {
    rl.question("Masukkan NIM Mahasiswa :", (line) => {
        if (line) {
            db.run(`DELETE FROM Mahasiswa WHERE nim=${line}`)
            console.log(`Data Mahasiswa ${line}, telah dihapus`);
                kelasMahasiswa.menuMahasiswa();
        }
    })
}