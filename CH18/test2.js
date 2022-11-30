import Options from './controller/options.js';

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

export default class Login {
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

Login.Masuk();