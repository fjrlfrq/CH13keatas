// import Table from 'cli-table';

// export function drawMahasiswa(rows){
// var table = new Table({
//     head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
//     , colWidths: [15, 30, 15, 10, 15, 20]
// });

// rows.forEach((item) => {
// table.push([item.nim, item.nama, item.Ttl, item.alamat, item.idjurusan, item.jurusan]);
// })

// console.log(table.toString());
// }

import Table from 'cli-table';

export function daftarmahasiswa(rows){
        var table = new Table({
            head: ['NIM', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan']
            , colWidths: [15, 30, 15, 15, 15, 20]
        });

        rows.forEach((item) => {
            table.push([item.nim, item.mahasiswa, item.Ttl, item.alamat, item.idjurusan, item.jurusan]);
        });

        console.log(table.toString());
}