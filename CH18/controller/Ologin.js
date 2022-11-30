import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===================================================================");
console.log("Welcome to Universitas Pendidikan Indonesia\nJl. Setiabudhi No. 255");
console.log("===================================================================");

rl.question("Username:", (line) => {
    if (line == "fajar") {
        rl.question(`Password: `, (line2) => {
            if (line2.toLowerCase() == "123") {
                console.log("===================================================================");
                rl.question(`welcome, ${line}. Your access level is:`, (line3) => {
                    if (line3 == "ADMIN") {
                        console.log("berhasil");
                    } else {
                        console.log('salah');
                        rl.question(line3);
                    }
                })
            } else {
                console.log('password salah');
                rl.close();
            }
        })
    } else {
        console.log("Username tidak terdaftar");
        rl.close();
    }
})