insert into Mahasiswa(nim, mahasiswa, Ttl, alamat, idjurusan, jurusan) values('2022110001', 'Salsabilla Syifatunnisa', '2003-12-12', 'Padang', 'J001', 'Fabrikasi Logam'),
  ('2022110002', 'Muhammad Fajar Al-Faruq', '2004-05-17', 'Bandung', 'J002', 'Listrik Tenaga'),
  ('2022110003', 'Nina Widianti', '2003-06-19', 'Padang', 'J003', 'Elektronika'),
  ('2022110004', 'Ahmad Ainul Yaqin', '1998-07-18', 'Bogor', 'J004', 'Mekatronika'),
  ('2022110005', 'zain bin abdullah', '2000-01-01', 'Bandung', 'J005', 'Otomotif'),
  ('2022110007', 'Lina', '2000-01-01', 'Bukittinggi', 'J003', 'Elektronika');

CREATE TABLE Mahasiswa(
    nim char(10) PRIMARY KEY NOT NULL,
    mahasiswa varchar(100) NOT NULL,
    Ttl varchar(100) NOT NULL,
    alamat text NOT NULL,
    idjurusan varchar(100) NOT NULL,
    jurusan varchar(100) NOT NULL,
    FOREIGN KEY(idjurusan) REFERENCES Jurusan(idjurusan),
    FOREIGN KEY(jurusan) REFERENCES Jurusan(jurusan)
  );

CREATE TABLE Jurusan(
    idjurusan varchar(100) PRIMARY KEY NOT NULL,
    jurusan varchar(100) NOT NULL
  );

CREATE TABLE Dosen(
    nip varchar(100) primary key not null,
    dosen varchar(100) not null
  );

CREATE TABLE MataKuliah(
    kode varchar(100) primary key,
    matkul varchar(100) not null,
    sks integer not null
  );

  CREATE TABLE Kontrak(
    id integer PRIMARY KEY AUTOINCREMENT,
    nim varchar(50) NOT NULL,
    mahasiswa varchar(100) NOT NULL,
    kodematkul varchar(100) NOT NULL,
    matkul varchar(100) NOT NULL,
    nip varchar(100) NOT NULL,
    dosen varchar(100) NOT NULL,
    Nilai varchar(10) NULL,
    FOREIGN KEY(nim) REFERENCES Mahasiswa(nim),
    FOREIGN KEY(mahasiswa) REFERENCES Mahasiswa(mahasiswa),
    FOREIGN KEY(kodematkul) REFERENCES MataKuliah(kode),
    FOREIGN KEY(matkul) REFERENCES MataKuliah(matkul),
    FOREIGN KEY(nip) REFERENCES Dosen(nip),
    FOREIGN key(dosen) REFERENCES Dosen(dosen)
  );

CREATE TABLE Kontrak2(
    id integer primary key autoincrement,
    nim varchar(100) not null,
    kodematkul varchar(100) not null,
    nip varchar(100) not null,
    nilai varchar(100),
    foreign key(nim) references Mahasiswa(nim),
    foreign key(kodematkul) references MataKuliah(kode),
    foreign key(nip) references Dosen(nip)
  );

insert into Jurusan(idjurusan,jurusan) values 
('J001','Fabrikasi Logam'),
('J002','Listrik Tenaga'),
('J003','Elekronika'),
('J004','Mekatronika'),
('J005','Otomotif'),
('J006','Sastra Jepang');

insert into MataKuliah(kode,matkul,sks) values
('MK01','data mining',20),
('MK02','basic',20),
('MK03','kerja bengkel',20),
('MK04','matematika',15),
('MK05','bahasa inggris',15),
('MK06','bahasa jepang',15);

insert into Dosen(nip,dosen) 
('D2201','Rubi'),
('D2202','Wildan'),
('D2203','Rizky'),
('D2204','Hilmi'),
('D2205','Bambang');

insert into Kontrak(nim,mahasiswa,kodematkul,matkul,nip,dosen,Nilai) values
('2022110001','Salasabilla Syifatunnisa','Mk01','data mining','D2201','Rubi','C'),
('2022110002','Muhammad Fajar Al-faruq','MK04','matematika','D2204','Hilmi','A+'),
('2022110003','Nina Widianti','MK02','basic','D2202','Wildan','B'),
('2022110004','Ahmad Ainul Yaqin','MK03','kerja bengkel','D2205','Bambang','B+'),
('2022110005','zain bin abdullah','MK01','data mining','D2203','Rizky','A++'),
('2022110002','Muhammad Fajar Al-faruq','Mk01','data mining','D2203','Rizky','C');

('2022110001','Mk01','D2201','B');