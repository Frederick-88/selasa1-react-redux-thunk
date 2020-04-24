List Pengertian:

1. Props
-Dalam props, dibentuknya "props" sendiri itu, adalah sebab dari 2 hal:
A. Map State to "Props"
B. Map Dispatch to "Props" --> biasa mengambil file dari 

Progressnya adalah mengambil data dari component lain dan mengubahnya menjadi props.
Jadi setelah diubah ke props kita bisa manggil di dalam file yang kita kerjakan.

DIHARUSKAN MENGGUNAKAN CONNECT BILA INGIN MENGGUNAKAN FUNGSI MAP STATE DAN MAP DISPATCH TO PROPS.

2. Functions

3. Flow

A. Component -
B. ActionCreator - Menentukan tipe action/fungsi dan menyediakan bahan melalui "PAYLOAD" --- nengok hubungan payload dengan reducer.

("Dispatch adalah penulisan wajib yang memiliki kaitan dengan (MapDispatchToProps) nantinya.")

C. Reducer - Mendefine isi dari action/fungsi sesuai case("Action Type). Return adalah isi dan maksud dari function tersebut.

Biasanya penulisan seperti:
...state, data : [...data,action.payload] --- ini adalah spread operator.

(...state,(ADALAH TAMBAHAN UNTUK DIMASUKKAN KE STATE.) : ("ISI DARI DATA TERSEBUT ADALAH APA))

4. DB.JSON
LIHATLAH PENULISAN PADA DB.JSON, DISANA BISA 2 DATABASE DIBUAT. SISWA DAN GURU.

5. PENGGUNAAN PADA APP.JS DLL ADALAH BASENYA, PELAJARILAH RULESNYA DGN DOKUMENTASI