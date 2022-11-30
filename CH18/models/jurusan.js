import sqlite3 from 'sqlite3';
import path from 'path';
const pathDB = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(pathDB);

export function readJ(callback) {
    db.all('SELECT * FROM Jurusan', (err, rows) => {
        if (err) return console.log('gagal ambil data', err)
        callback(rows);
    })
}