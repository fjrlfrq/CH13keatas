import Table from 'cli-table';

import kelasMataKuliah from "../controller/matakuliah.js";

export function daftarMataKuliah(rows) {
    var table = new Table({
        head: ['Kode MatKul', 'Nama Matkul', 'SKS']
        , colWidths: [15, 20, 8]
    });

    rows.forEach((item) => {
        table.push([item.kode, item.matkul, item.sks]);
    })

    console.log(table.toString());
    kelasMataKuliah.menuMataKuliah();
}

