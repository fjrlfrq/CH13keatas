// import { showMahasiswa } from './controller/Mahasiswa.js';
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');
// const Table = require('cli-table')
// const pathDB = path.join(__dirname, 'db', 'university.db')
// const db = new sqlite3.Database(pathDB);

import { cariM, daftarM, hapusM, tambahM } from './controller/Mahasiswa.js';
import { daftarJ } from './controller/jurusan.js';

import sqlite3 from 'sqlite3';
import path from 'path';
import Table from 'cli-table';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

import readline from 'node:readline';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Login {
    static pilihan() {
        Options.menu();
    }

    static salam() {
        console.log("===================================================================");
        console.log("Welcome to Universitas Pendidikan Indonesia\nJl. Setiabudhi No. 255");
        console.log("===================================================================");
    }

    static akun() {
        rl.question("Username:", (line) => {
            if (line == "fajar") {
                Login.password();
            } else {
                console.log("Username tidak terdaftar");
                Login.akun();
            }
        })
    }

    static password() {
        rl.question(`Password: `, (line) => {
            if (line == "123") {
                Login.admin();
            } else {
                console.log('password salah');
                Login.password();
            }
        })
    }

    static admin() {
        rl.question(`welcome, Fajar. Your access level is:`, (line3) => {
            if (line3 == "ADMIN") {
                Login.pilihan();
            } else {
                console.log('salah');
                Login.admin();
            }
        })
    }

    static Masuk() {
        Login.salam();
        Login.akun();
    }
}

// Login.Masuk();

class Options {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Mahasiswa');
        console.log('[2] Jurusan');
        console.log('[3] Dosen');
        console.log('[4] Mata Kuliah');
        console.log('[5] Kontrak');
        console.log('[6] Keluar');
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

// Options.menu();


export default class kelasMahasiswa {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Mahasiswa');
        console.log('[2] Cari Mahasiswa');
        console.log('[3] Tambah Mahasiswa');
        console.log('[4] Hapus Mahasiswa');
        console.log('[5] kembali');
    }

    static menuMahasiswa() {
        kelasMahasiswa.daftar();
        rl.question("Masukkan salah satu nomor dari opsi di atas:", (line) => {
            switch (line) {
                case "1":
                    daftarM();
                    break;
                case "2":
                    cariM();
                    break;
                case "3":
                    tambahM();
                    break;
                case "4":
                    hapusM();
                    break;
                case "5":
                    Options.menu();
                    break;
                default:
                    kelasMahasiswa.menuMahasiswa();
                    break;
            }
        })
    }
}

kelasMahasiswa.menuMahasiswa();
export class kelasJurusan {
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
                    daftarJ();
                    // kelasJurusan.daftarJurusan();
                    break;
                case "2":
                    kelasJurusan.cariJurusan();
                    break;
                case "3":
                    kelasJurusan.tambahJurusan();
                    break;
                case "4":
                    kelasJurusan.hapusJurusan();
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

    // static daftarJurusan() {
    //     db.all('SELECT * FROM Jurusan', (err, rows) => {
    //         if (err) return console.log('gagal ambil data', err)
    //         var table = new Table({
    //             head: ['Kode Jurusan', 'Nama Jurusan']
    //             , colWidths: [15, 30]
    //         });

    //         rows.forEach((item) => {
    //             table.push([item.idjurusan, item.jurusan]);
    //         })

    //         console.log(table.toString());
    //         kelasJurusan.menuJurusan();
    //     })
    // }

    static cariJurusan() {
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

    static tambahJurusan() {
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

    static hapusJurusan() {
        rl.question("Masukkan Kode Jurusan :", (line) => {
            if (line) {
                db.run(`DELETE FROM Jurusan WHERE idjurusan= "${line}"`)
                console.log(`Data Jurusan ${line}, telah dihapus`);
                console.log("===================================================================\n"),
                    kelasMahasiswa.menuMahasiswa();
            }
        })
    }
}

// kelasJurusan.menuJurusan();

class kelasKontrak {
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
                    kelasKontrak.daftarKontrak();
                    break;
                case "2":
                    if ("2") {
                        kelasKontrak.cariKontrak();
                    }
                    break;
                case "3":
                    kelasKontrak.tambahKontrak();
                    break;
                case "4":
                    kelasKontrak.hapusKontrak();
                    break;
                case "5":
                    kelasKontrak.updateKontrak();
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

    static daftarKontrak() {
        db.all('SELECT * FROM Kontrak;', (err, rows) => {
            if (err) return console.log('gagal ambil data', err)
            var table = new Table({
                head: ['ID', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
                , colWidths: [5, 15, 28, 15, 10, 15]
            });
            rows.forEach((item) => {
                table.push([item.id, item.nim, item.mahasiswa, item.matkul, item.dosen, item.Nilai]);
            })

            console.log(table.toString());
            console.log("===================================================================\n"),
                kelasKontrak.menuKontrak();
        })
    }

    static cariKontrak() {
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
                console.log("===================================================================\n")
                // kelasKontrak.menuKontrak();
            });
        })
    }

    static tambahKontrak() {
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

    static hapusKontrak() {
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
                console.log("===================================================================\n"),
                    kelasKontrak.menuKontrak();
            }

        })
    }

    static updateKontrak() {
        rl.question("Masukkan NIM Mahasiswa:", (line) => {
            if (line == "") { console.log("gagal\n"); kelasKontrak.updateKontrak(); }
            else if (line) {
                rl.question("Masukkan id yang akan dirubah nilai :", (line2) => {
                    if (line2 == "") { console.log("gagal\n"); kelasKontrak.updateKontrak(); }
                    else if (line2) {
                        rl.question("tulis nilai yang baru :", (line3) => {
                            if (line3 == "") { console.log("gagal\n"); kelasKontrak.updateKontrak(); }
                            else if (line3) {
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
}

// kelasKontrak.menuKontrak();

class kelasMataKuliah {
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
                    kelasMataKuliah.daftarMataKuliah();
                    break;
                case "2":
                    kelasMataKuliah.tambahMataKuliah();
                    break;
                case "3":
                    kelasMataKuliah.hapusMataKuliah();
                    break;
                case "4":
                    Options.menu();
                    break;

            }
        })
    }

    static daftarMataKuliah() {
        db.all('SELECT * FROM MataKuliah', (err, rows) => {
            if (err) return console.log('gagal ambil data', err)
            var table = new Table({
                head: ['Kode MatKul', 'Nama Matkul', 'SKS']
                , colWidths: [15, 20, 8]
            });

            rows.forEach((item) => {
                table.push([item.kode, item.matkul, item.sks]);
            })

            console.log(table.toString());
            kelasMataKuliah.menuMataKuliah();
        })
    }

    static tambahMataKuliah() {
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

    static hapusMataKuliah() {
        rl.question("Masukkan Kode Mata Kuliah :", (line) => {
            if (line) {
                db.run(`DELETE FROM MataKuliah WHERE kode="${line}"`),
                    console.log(`Data MataKuliah ${line}, telah dihapus`);
                console.log("===================================================================\n"),
                    kelasMataKuliah.menuMataKuliah();
            }
        })
    }
}

// kelasMataKuliah.menuMataKuliah();


class kelasDosen {
    static daftar() {
        console.log("Silahkan pilih opsi dibawah ini:");
        console.log('[1] Daftar Dosen');
        console.log('[2] Tambah Dosen');
        console.log('[3] Hapus Dosen');
        console.log('[4] kembali');
    }

    static menuDosen() {
        kelasDosen.daftar();
        rl.question("masukkan nomor:", (line) => {
            switch (line) {
                case "1":
                    kelasDosen.daftarDosen();
                    break;
                case "2":
                    kelasDosen.tambahDosen();
                    break;
                case "3":
                    kelasDosen.hapusDosen();
                    break;
                case "4":
                    Options.menu();
                    break;

            }
        })
    }

    static daftarDosen() {
        db.all('SELECT * FROM Dosen', (err, rows) => {
            if (err) return console.log('gagal ambil data', err)
            var table = new Table({
                head: ['NIP', 'Nama']
                , colWidths: [10, 15]
            });

            rows.forEach((item) => {
                table.push([item.nip, item.dosen]);
            })

            console.log(table.toString());
            kelasDosen.menuDosen();
        })
    }

    static tambahDosen() {
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

    static hapusDosen() {
        rl.question("Masukkan NIP:", (line) => {
            if (line) {
                db.run(`DELETE FROM Dosen WHERE nip="${line}"`),
                    console.log(`Data Dosen ${line}, telah dihapus`);
                console.log("===================================================================\n"),
                    kelasDosen.menuDosen();
            }
        })
    }
}

// kelasDosen.menuDosen();