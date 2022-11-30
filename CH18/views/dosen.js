import Table from 'cli-table';

import kelasDosen from "../controller/dosen.js";

export function daftarDosen(rows) {
    var table = new Table({
        head: ['NIP', 'Nama']
        , colWidths: [10, 15]
    });

    rows.forEach((item) => {
        table.push([item.nip, item.dosen]);
    })
    console.log(table.toString());
    kelasDosen.menuDosen();
}