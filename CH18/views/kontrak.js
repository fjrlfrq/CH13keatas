import Table from 'cli-table';

export function drawKontrak(rows){
var table = new Table({
    head: ['ID','NIM','Nama','Mata Kuliah','Dosen','Nilai']
    , colWidths: [5, 15, 25, 20, 10, 5]
});

rows.forEach((item) => {
table.push([item.id, item.nim, item.nama, item.matkul, item.dosen, item.Nilai]);
})

console.log(table.toString());
}