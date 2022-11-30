import Table from 'cli-table';

import kelasJurusan from "../controller/jurusan.js";

export function daftarJurusan(rows) {
    var table = new Table({
        head: ['Kode Jurusan', 'Nama Jurusan']
        , colWidths: [15, 30]
    });

    rows.forEach((item) => {
        table.push([item.idjurusan, item.jurusan]);
    })
    console.log(table.toString());
    kelasJurusan.menuJurusan();
}