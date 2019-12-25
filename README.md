# Repository untuk tugas besar rekomendasi resep

## tools untuk menjalankan aplikasi
- python versi 3.7 dengan package:
    - fastapi
    - uvicorn
    - scikit-learn
    - pandas
    - numpy
- Nodejs versi 10 atau lebih
- npm versi 6 atau lebih (biasanya sudah terinstall bersamaan dengan nodejs)

## Cara menjalankan aplikasi
Ada 2 tools yang harus dijalankan untuk menjalankan aplikasi ini yaitu backend (python fastapi) dan frontend (nodejs react).
### Backend
1. Masuk ke folder fastAPI-rekomendasi-resep.
1. Jalankan conda environtment python di folder tersebut.
1. Pada conda environtment jalankan `uvicorn main:app`
1. Untuk memastikan aplikasi jalan atau tidak pada browser buka `http://localhost:8000/docs`. Jika aplikasi berjalan maka akan muncul tampilan html fast api.
### Frontend
1. Masuk ke folder next-rekomendasi-resep
1. Jalankan command prompt/terminal pada folder tersebut
1. Pada command prompt/terminal jalankan `npm install`
1. Setelah itu jalankan `npm run build`
1. Terakhir jalankan `npm run start`. Aplikasi akan muncul pada browser di `http://localhost:3000/`
