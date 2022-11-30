import Table from 'cli-table';

export function drawDosen(rows){
var table = new Table({
    head: ['NIP', 'Nama Dosen']
    , colWidths: [10, 15]
});

rows.forEach((item) => {
table.push([item.nip, item.nama]);
})

console.log(table.toString());
}

