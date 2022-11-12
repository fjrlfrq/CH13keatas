CREATE TABLE Mahasiswa (
    nim varchar(100) PRIMARY KEY NOT NULL, 
    nama varchar(100) NOT NULL, 
    umur integer NOT NULL,
    alamat text
);

CREATE TABLE Dosen (
    iddosen varchar(100) PRIMARY KEY NOT NULL, 
    nama varchar(100) NOT NULL,
    namamatkul varchar(100) NOT NULL,
    FOREIGN KEY(namamatkul) REFERENCES MataKuliah(nama)
);

CREATE TABLE Jurusan (
    idjurusan varchar(100) PRIMARY KEY NOT NULL, 
    nama varchar(100) NOT NULL
);

CREATE TABLE MataKuliah (
    idmatkul varchar(100) PRIMARY KEY NOT NULL,  
    nama varchar(100) NOT NULL 
);

CREATE TABLE Pengajar (
    id integer PRIMARY KEY AUTOINCREMENT, 
    iddosen varchar(100) NOT NULL, 
    Dosen varchar(100) NOT NULL,
    matkul varchar(100) NOT NULL,
    Mahasiswa varchar(100) NOT NULL,
    FOREIGN KEY(iddosen) REFERENCES Dosen(iddosen),
    FOREIGN KEY(Dosen) REFERENCES Dosen(nama),
    FOREIGN KEY(matkul) REFERENCES MataKuliah(nama),
    FOREIGN KEY(Mahasiswa) REFERENCES Mahasiswa(nama) 
);

CREATE TABLE Pelajar (
    nim varchar(100) NOT NULL, 
    idjurusan varchar(100) NOT NULL,
    idmatkul varchar(100) NOT NULL, 
    jurusan varchar(100) NOT NULL,
    FOREIGN KEY(nim) REFERENCES Mahasiswa(nim), 
    FOREIGN KEY(idjurusan) REFERENCES Jurusan(idjurusan), 
    FOREIGN KEY(jurusan) REFERENCES Jurusan(nama), 
    FOREIGN KEY(idmatkul) REFERENCES MataKuliah(idmatkul)
);

CREATE TABLE NilaiMahasiswa(
    nomor integer PRIMARY KEY AUTOINCREMENT,
    nim varchar(50) NOT NULL,
    jurusan varchar(100) NOT NULL,
    matkul varchar(100) NOT NULL,
    SKS integer NOT NULL,
    FOREIGN KEY(nim) REFERENCES Pelajar(nim),
    FOREIGN KEY(jurusan) REFERENCES Pelajar(jurusan),
    FOREIGN KEY(matkul) REFERENCES MataKuliah(nama)
);


INSERT INTO Mahasiswa VALUES('A0001','Salsabilla Syifatunnisa',20,'Padang'),
                            ('A0002','Muhammad Fajar Al-Faruq',18,'Bandung'),
                            ('A0003','Nina Widianti',19,'Padang'),
                            ('A0004','Ahmad Ainul Yaqin',24,'Bogor'),
                            ('A0005','Ahmad Roy',20,'Bandung');

INSERT INTO Dosen VALUES('0001A','Budi','Matematika'),
                        ('0002A','Lina','Desain'),
                        ('0003A','Siska','Agama'),
                        ('0004A','Joko','Data Mining');

INSERT INTO Jurusan VALUES('00001','Informatika'),
                          ('00002','Seni dan Desain'),
                          ('00003','Hukum'),

INSERT INTO MataKuliah VALUES('A001','Matematika'),
                             ('A002','Desain'),
                             ('A003','Agama'),
                             ('A004','Data Mining');

INSERT INTO Pengajar(iddosen, Dosen, matkul, Mahasiswa) VALUES('0001A','Budi','Matematika','Salsabilla Syifatunnisa'),
                                                              ('0001A','Budi','Matematika','Muhammad Fajar Al-Faruq'),
                                                              ('0001A','Budi','Matematika','Nina Widianti'),
                                                              ('0002A','Lina','Desain','Muhammad Fajar Al-Faruq'),
                                                              ('0002A','Lina','Desain','Nina Widianti'),
                                                              ('0003A','Lina','Agama','Salsabilla Syifatunnisa'),
                                                              ('0003A','Siska','Agama','Muhammad Fajar Al-Faruq'),
                                                              ('0003A','Siska','Agama','Nina Widianti'),
                                                              ('0004A','Joko','Data Mining','Salsabilla Syifatunnisa'),
                                                              ('0004A','Joko','Data Mining','Muhammad Fajar Al-Faruq');

INSERT INTO Pelajar VALUES('A0001','00001','A001','Informatika'),
                          ('A0002','00002','A002','Seni dan Desain'),
                          ('A0003','00003','A003','Hukum'),
                          ('A0004','00001','A004','Informatika');

INSERT INTO NilaiMahasiswa(nim,jurusan,matkul,SKS) VALUES('A0001','Hukum','Matematika',3),
                                                         ('A0001','Hukum','Agama',3),
                                                         ('A0001','Hukum','Data Mining',3),
                                                         ('A0002','Informatika','Matematika',3),
                                                         ('A0002','Informatika','Desain',3),
                                                         ('A0002','Informatika','Data Mining',3),
                                                         ('A0002','Informatila','Agama',3),
                                                         ('A0003','Seni dan Desain','Agama',3),
                                                         ('A0003','Seni dan Desain','Matematika',3),
                                                         ('A0003','Seni dan Desain','Desain',4);


--tampilkan seluruh data mahasiswa beserta nama jurusannya
SELECT Mahasiswa.nim,nama,umur,alamat, Pelajar.jurusan FROM Mahasiswa INNER JOIN Pelajar ON Mahasiswa.nim = Pelajar.nim;
  --atau
SELECT Mahasiswa.*, Pelajar.jurusan FROM Mahasiswa JOIN Pelajar ON Mahasiswa.nim = Pelajar.nim; 

--tampilkan mahasiswa yang memiliki umur dibawah 20 tahun
SELECT * FROM Mahasiswa WHERE umur < '20';

--tampilkan mahasiswa yang memiliki nilai "B" ke atas
ALTER TABLE NilaiMahasiswa ADD nilai varchar(3) NULL;
UPDATE NilaiMahasiswa set nilai = 'B' WHERE nomor = '1';
UPDATE NilaiMahasiswa set nilai = 'A' WHERE nomor = '2';
UPDATE NilaiMahasiswa set nilai = 'B' WHERE nomor = '3';
UPDATE NilaiMahasiswa set nilai = 'A' WHERE nomor = '4';
UPDATE NilaiMahasiswa set nilai = 'B' WHERE nomor = '5';
UPDATE NilaiMahasiswa set nilai = 'A' WHERE nomor = '6';
UPDATE NilaiMahasiswa set nilai = 'A' WHERE nomor = '7';
UPDATE NilaiMahasiswa set nilai = 'A' WHERE nomor = '8';
UPDATE NilaiMahasiswa set nilai = 'C' WHERE nomor = '9';
UPDATE NilaiMahasiswa set nilai = 'A' WHERE nomor = '10';
SELECT * FROM NilaiMahasiswa WHERE nilai < 'B';

--tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10 
SELECT Mahasiswa.nim, Mahasiswa.nama, SUM(NilaiMahasiswa.SKS) AS total_sks FROM Mahasiswa JOIN NilaiMahasiswa USING(nim) GROUP BY nim HAVING SUM(NilaiMahasiswa.SKS) > 10;

--tampilkan mahasiswa yang mengontrak mata kuliah 'data mining'
SELECT NilaiMahasiswa.nomor, Mahasiswa.nama, NilaiMahasiswa.matkul FROM Mahasiswa INNER JOIN NilaiMahasiswa ON Mahasiswa.nim = NilaiMahasiswa.nim WHERE matkul = 'Data Mining';

--tampilkan jumlah mahasiswa untuk setiap dosen
SELECT Dosen.iddosen, Dosen.nama, count(Pengajar.Mahasiswa) AS total_mahasiswa FROM Dosen JOIN Pengajar USING(iddosen) GROUP BY iddosen;

--urutkan mahasiswa berdasarkan umurnya
SELECT * FROM Mahasiswa ORDER BY umur;
   --terbalik
SELECT * FROM Mahasiswa ORDER BY umur DESC;

--tampilkan kontrak matakuliah yang harus diulang(nilai D dan E), serta tampilkan data mahasiswa jurusan dan dosen secara lengkap.
SELECT Dosen.nama, Mahasiswa.nama, NilaiMahasiswa.jurusan, NilaiMahasiswa.nilai FROM Mahasiswa INNER JOIN NilaiMahasiswa ON Mahasiswa.nim = NilaiMahasiswa.nim INNER JOIN Dosen ON Dosen.namamatkul = NilaiMahasiswa.matkul WHERE nilai > 'C';
--gunakan mode JOIN dan WHERE clause(solusi terdiri dari 2 syntax Sql )
