import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'silahkan salah satu nomor dari opsi diatas:'
});

console.log("Silahkan pilih opsi dibawah ini:");
console.log('[1] Mahasiswa');
console.log('[2] Jurusan');
console.log('[3] Dosen');
console.log('[4] Mata Kuliah');
console.log('[5] Kontrak');
console.log('[6] Keluar');
console.log("===================================================================");

rl.prompt();
rl.on('line', function (sentence) {
    switch (sentence) {
        case "1":
            console.log("Mahasiswa");
            break;
        case "2":
            console.log("Jurusan");
            break;
        case "3":
            console.log("Dosen");
            break;
        case "4":
            console.log("Mata Kuliah");
            break;
        case "5":
            console.log("Kontrak");
            break;
        case "6":
            console.log("===================================================================");
            console.log("Anda Keluar");
            console.log("Masuk ke login kembali");
            break;
        default:
            console.log("Silahkan pilih opsi dibawah ini:");
            console.log('[1] Mahasiswa');
            console.log('[2] Jurusan');
            console.log('[3] Dosen');
            console.log('[4] Mata Kuliah');
            console.log('[5] Kontrak');
            console.log('[6] Keluar');
            break;
    }
    console.log("===================================================================");
    rl.prompt();
});