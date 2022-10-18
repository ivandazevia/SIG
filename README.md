# Sistem Informasi Geografis
<h3>Mencari Jarak Terpendek dari Sebuah Titik Menuju Restoran Terdekat di Wilayah Surabaya dengan Menggunakan Aplikasi Berbasis Web</h3>

1.	Fitur-fitur :
- Pencarian restoran terdekat dari posisi yang dimasukkan pengguna atau dari posisi pengguna saat ini.
- Pencarian rute terdekat dari posisi yang dimasukkan pengguna atau dari posisi pengguna saat ini menuju restoran di Kota Surabaya yang ada pada pilihan.
- Pencarian rute terdekat antara 2 restoran di Kota Surabaya yang ada pada pilihan.

2.	Alat :
- PHP
- HTML5
- Javascript
- OpenLayers JS
- Apache XAMPP
- PostGIS
- PostgreSQL
- Osm2pgrouting
- Hot Export Tool
- Osmconvert64

3.	Metode :
- Dijkstra
> Algoritma Djikstra yang merupakan greedy algorithm yang sering digunakan untuk memecahkan permasalahan jarak terpendek (shortest path problem) untuk sebuah graf berarah dengan bobot pada garisnya yang bernilai positif.
- OpenLayers
> OpenLayers adalah library Javascript murni untuk menampilkan data peta di berbagai web browser, tanpa server side dependencies. Open layers mengimplementasikan JavaScript API untuk membangun rich web-based geographic apllications yang mirip dengan Google maps dan MSN Virtual Earth APIS. Open Layer adalah bersifat Free Software, yang dibangun oleh komunitas Open Source.
- Osmconvert64
> Osmconvert adalah perangkat yang berfungsi untuk mengkonfersi data peta menjadi .osm.
- Osm2pgrouting
> Osm2pgrouting adalah perangkat yang berfungsi untuk memasukkan data peta Openstreetmap ke dalam basis data spasial.

</br>
Sistem ini memiliki 3 fitur dengan data masukan yang berbeda-beda, fitur tersebut antara lain : 

1. Pencarian restoran terdekat dari posisi yang dimasukkan pengguna atau dari posisi pengguna saat ini
> - ![image](https://user-images.githubusercontent.com/32997439/196534152-de0558e1-17eb-4acf-933f-ac2f97dc019c.png)
> - ![image](https://user-images.githubusercontent.com/32997439/196534447-01f10658-0b38-4500-b804-96e15d5b8987.png)


2. Pencarian rute terdekat dari posisi yang dimasukkan pengguna atau dari posisi pengguna saat ini menuju restoran di Kota Surabaya yang ada pada pilihan.
> - ![image](https://user-images.githubusercontent.com/32997439/196534261-2b3ed6c5-4b53-4f40-8eee-fb2b7aca0881.png)
> - ![image](https://user-images.githubusercontent.com/32997439/196534553-ca6d0e7a-ae80-405c-ae82-4709028bdb3a.png)


3. Pencarian rute terdekat antara 2 restoran di Kota Surabaya yang ada pada pilihan.
> - ![image](https://user-images.githubusercontent.com/32997439/196534378-69dc6343-6245-4ef6-83a8-da82169c568f.png)
> - ![image](https://user-images.githubusercontent.com/32997439/196534585-3d2b5ace-c7f9-460a-9356-0f553100b91f.png)


</br>

Setelah dilakukan implementasi, dilakukan uji kebeneran dengan membandingkan hasil keluaran sistem dengan Google Maps. Sehingga iperoleh kesimpulan seperti berikut:
1. Algoritma dijkstra berhasil diimplementasikan untuk mencari rute terdekat. Banyak rute yang dihasilkan oleh sistem sama dengan rute yang dihasilkan oleh Google Maps.
2. Karena data yang berbda, terdapat beberapa perbedaan rute yang dihasilkan. Pembobotan rute yang berbeda dapat menghasilkan keluaran yang berbeda dan hasil perhitungan jarak juga menjadi berbeda dengan Google Maps. 

Dokumentasi lebih lengkap terkait implementasi hingga pengujian sistem dapat diakses pada alamat berikut:
https://drive.google.com/file/d/1gxw4z8DQ1u9P9Ami1uPjqPCPnBMnWdn-/view?usp=sharing

