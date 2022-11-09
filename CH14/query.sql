CREATE TABLE Mahasiswa (
    nim varchar(100) primary key not null, 
    nama varchar(100) not null, 
    alamat text
);

CREATE TABLE Dosen (
    iddosen varchar(100) primary key not null, 
    nama varchar(100) not null
);

CREATE TABLE Jurusan (
    idjurusan varchar(100) primary key not null, 
    nama varchar(100) not null
);

CREATE TABLE MataKuliah (
    idmatkul varchar(100) primary key not null,  
    nama varchar(100) not null , 
    sks numeric not null
);

INSERT INTO Mahasiswa VALUES('A0001','Salsabilla Syifatunnisa','Padang'),
                            ('A0002','Muhammad Fajar Al-Faruq','Bandung'),
                            ('A0003','Nina Widianti','Padang'),
                            ('A0004','Ahmad Ainul Yaqin','Bogor');

INSERT INTO Dosen VALUES('0001A','Budi'),
                        ('0002A','Lina'),
                        ('0003A','Siska');

INSERT INTO Jurusan VALUES('00001','Informatika'),
                          ('00002','Seni dan Desain'),
                          ('00003','Hukum');

INSERT INTO MataKuliah VALUES('A001','Matematika','3'),('A002','Seni Budaya','3'),('A003','Agama','2');