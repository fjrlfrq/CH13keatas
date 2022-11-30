import Table from 'cli-table';

export function drawMataKuliah(rows){
var table = new Table({
    head: ['Kode Matkul', 'Nama Matkul', 'SKS']
    , colWidths: [10, 20, 5]
});

rows.forEach((item) => {
table.push([item.kode, item.nama, item.sks]);
})

console.log(table.toString());
}

