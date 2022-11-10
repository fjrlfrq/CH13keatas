CREATE TABLE Mahasiswa (
    nim varchar(100) PRIMARY KEY NOT NULL, 
    nama varchar(100) NOT NULL, 
    alamat text
);

CREATE TABLE Dosen (
    iddosen varchar(100) PRIMARY KEY NOT NULL, 
    nama varchar(100) NOT NULL
);

CREATE TABLE Jurusan (
    idjurusan varchar(100) PRIMARY KEY NOT NULL, 
    nama varchar(100) NOT NULL
);

CREATE TABLE MataKuliah (
    idmatkul varchar(100) PRIMARY KEY NOT NULL,  
    nama varchar(100) NOT NULL , 
    sks numeric NOT NULL
);

CREATE TABLE Pengajar (
    id integer PRIMARY KEY AUTOINCREMENT, 
    iddosen varchar(100) NOT NULL, 
    idjurusan varchar(100) NOT NULL, 
    idmatkul varchar(100) NOT NULL, 
    FOREIGN KEY(iddosen) REFERENCES Dosen(iddosen), 
    FOREIGN KEY(idjurusan) REFERENCES Jurusan(idjurusan), 
    FOREIGN KEY(idmatkul) REFERENCES MataKuliah(idmatkul)
);

CREATE TABLE Pelajar (
    id integer PRIMARY KEY AUTOINCREMENT, 
    nim varchar(100) NOT NULL, 
    idjurusan varchar(100) NOT NULL, 
    idmatkul varchar(100) NOT NULL, 
    FOREIGN KEY(nim) REFERENCES Mahasiswa(nim), 
    FOREIGN KEY(idjurusan) REFERENCES Jurusan(idjurusan), 
    FOREIGN KEY(idmatkul) REFERENCES MataKuliah(idmatkul));

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

INSERT INTO MataKuliah VALUES('A001','Matematika','3'),
                             ('A002','Seni Budaya','3'),
                             ('A003','Agama','2');

INSERT INTO Pengajar (iddosen, idjurusan, idmatkul) VALUES('0001A', '00001', 'A001'),
                                                          ('0002A', '00002', 'A002'),
                                                          ('0003A', '00003', 'A003'),
                                                          ('0002A', '00002', 'A002');

INSERT INTO Pelajar (nim, idjurusan, idmatkul) VALUES('A0001', '00001', 'A001'),
                                                     ('A0002', '00002', 'A002'),
                                                     ('A0003', '00003', 'A003'),
                                                     ('A0002', '00002', 'A002');