import sqlite3 from 'sqlite3';
import path from 'path';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

import Table from 'cli-table';
import { rl } from '../test2.js';
import kelasKontrak from "../controller/kontrak.js";

export function readK(callback) {
    db.all('SELECT * FROM Kontrak;', (err, rows) => {
        if (err) return console.log('gagal ambil data', err)
        callback(rows);
    })
}

export function cariK() {
    rl.question(`Masukkan NIM Mahasiswa:`, (line) => {
        db.all(`SELECT * FROM Kontrak WHERE nim = ${line}`, (err, rows) => {
            if (err) return console.log(`Mahasiswa dengan nim ${line}, tidak terdaftar`, err)
            var table = new Table({
                head: ['ID', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
                , colWidths: [5, 15, 28, 15, 10, 8]
            });

            rows.forEach((item) => {
                table.push([item.id, item.nim, item.mahasiswa, item.matkul, item.dosen, item.Nilai]);
            })

            console.log(table.toString());
            kelasKontrak.menuKontrak();
        });
    })
}

export function tambahK() {
    console.log("===================================================================");
    rl.question("Masukkan NIM:", (line) => {
        if (line) {
            rl.question("Masukkan Nama:", (line2) => {
                if (line2) {
                    rl.question("Masukkan Kode Mata Kuliah:", (line3) => {
                        if (line3) {
                            rl.question("Masukkan Mata Kuliah:", (line4) => {
                                if (line4) {
                                    rl.question("Masukkan NIP:", (line5) => {
                                        if (line5) {
                                            rl.question("Masukkan Dosen:", (line6) => {
                                                if (line6) {
                                                    rl.question("Masukkan Nilai:", (line7) => {
                                                        if (line7) {
                                                            db.run(`INSERT INTO Kontrak (nim,mahasiswa,kodematkul,matkul,nip,dosen,Nilai) Values ('${line}','${line2}','${line3}}','${line4}','${line5}','${line6}','${line7}')`)
                                                            console.log("Mahasiswa telah ditambahkan");
                                                            kelasKontrak.menuKontrak();
                                                        } else {
                                                            db.run(`INSERT INTO Kontrak (nim,mahasiswa,kodematkul,matkul,nip,dosen) Values ('${line}','${line2}','${line3}}','${line4}','${line5}','${line6}')`)
                                                            console.log("Mahasiswa telah ditambahkan");
                                                            kelasKontrak.menuKontrak();
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
    })
}

export function hapusK() {
    console.log("===================================================================");
    rl.question("Masukkan ID :", (line) => {
        if (line == "") {
            rl.question("apakah anda tidak jadi menghapus ? y/n \n", (line2) => {
                if (line2 == "y") {
                    kelasKontrak.menuKontrak();
                } else { kelasKontrak.hapusKontrak(); }
            })
        }
        else if (line) {
            db.run(`DELETE FROM Kontrak WHERE id=${line}`)
            console.log(`Data Mahasiswa ${line}, telah dihapus`);
                kelasKontrak.menuKontrak();
        }

    })
}

export function updateK() {
    console.log("===================================================================");
    rl.question("Masukkan NIM Mahasiswa:", (line) => {
        if (line == "") { console.log("gagal\n"); kelasKontrak.updateKontrak(); }
        else if (line) {
            console.log("===================================================================");
            rl.question("Masukkan id yang akan dirubah nilai :", (line2) => {
                if (line2 == "") { console.log("gagal\n"); kelasKontrak.updateKontrak(); }
                else if (line2) {
                    rl.question("tulis nilai yang baru :", (line3) => {
                        if (line3 == "") { console.log("gagal\n"); kelasKontrak.updateKontrak(); }
                        else if (line3) {
                            console.log("===================================================================");
                            rl.question("anda yakin ingin mengubah? y/n: ", (line4) => {
                                if (line4 == "y") {
                                    db.run(`UPDATE kontrak set Nilai = "${line3}" where id = "${line2}";`)
                                    console.log("Mahasiswa telah ditambahkan");
                                    kelasKontrak.menuKontrak();
                                } else { kelasKontrak.menuKontrak(); }
                            })
                        }
                    })
                }
            })
        }
    })
}