import Table from 'cli-table';

export function drawJurusan(rows){
var table = new Table({
    head: ['Kode Jurusan', 'Nama Jurusan']
    , colWidths: [15, 20]
});

rows.forEach((item) => {
table.push([item.idjurusan, item.nama]);
})

console.log(table.toString());
}

