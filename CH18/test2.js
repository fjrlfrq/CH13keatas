import Options from './controller/options.js';

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

    static loginlogout() {
        rl.question("Login/Logout:", (line) => {
            if (line.toLowerCase() == "login") {
                Login.akun();
            } else if (line.toLowerCase() == "logout") {
                rl.close();
                process.exit(0);
            } else {
                Login.loginlogout();
            }
        })
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
        console.log("===================================================================");
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
        Login.loginlogout();
    }
}

Login.Masuk();