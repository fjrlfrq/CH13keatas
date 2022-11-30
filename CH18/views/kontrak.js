import Table from 'cli-table';

import kelasKontrak from "../controller/kontrak.js";

export function daftarKontrak(rows) {
    var table = new Table({
        head: ['ID', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
        , colWidths: [5, 15, 28, 15, 10, 15]
    });
    rows.forEach((item) => {
        table.push([item.id, item.nim, item.mahasiswa, item.matkul, item.dosen, item.Nilai]);
    })

    console.log(table.toString());
        kelasKontrak.menuKontrak();
}