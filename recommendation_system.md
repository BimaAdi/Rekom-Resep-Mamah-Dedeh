# Sistem Rekomendasi

Sistem rekomendasi (*recommendation system*) adalah algoritma yang bertujuan untuk memberikan user informasi yang relevan berdasarkan *pattern* yang ada dalam suatu dataset. Contoh dari sistem rekomendasi adalah rekomendasi yang didapatkan ketika kita menonton video di Youtube, sistem memberikan kita rekomendasi video-video yang mungkin akan kita suka dan tonton berdasarkan video yang telah kita tonton sebelumnya. Contoh lainnya adalah sistem rekomendasi yang terdapat dalam *marketplace* seperti Tokopedia, Bukalapak, dan Shopee. Ketika kita telah membeli suatu barang di Tokopedia misalnya, maka sistem rekomendasi akan memberikan rekomendasi produk serupa dari produk yang telah kita beli sebelumnya. Sistem rekomendasi juga digunakan pada layanan musik digital seperti Spotify, yang akan memberikan rekomendasi musik apa saja yang mungkin kita ingin dengarkan. 

Sistem rekomendasi ini bermanfaat untuk user karena user diberikan kemudahan untuk melihat, mendengar, menonton, atau membeli sesuatu sesuai dengan keinginan user tersebut. Sistem rekomendasi juga bermanfaat untuk penyedia layanan atau pemilik bisnis. Sistem rekomendasi dapat membuat user semakin tertarik untuk menggunakan layanan atau membeli barang. Hal ini dapat menciptakan keterikatan antara user dengan layanan tersebut. Tentu saja hal ini akan memberikan keuntungan kepada pemilik bisnis. Oleh karena itu, sistem rekomendasi ini banyak digunakan oleh berbagai penyedia layanan. Perusahaan besar lainnya yang menggunakan sistem rekomendasi adalah Amazon dan Netflix.

Terdapat beberapa macam sistem rekomendasi, yaitu:
- *Collaborative filtering* : Sistem rekomendasi ini menggunakan perilaku dari user untuk memberikan rekomendasi untuk user lainnya yang memiliki perilaku yang mirip. Dapat dikatakan bahwa rekomendasi diberikan berdasarkan preferensi dari user lain. *Collaborative filtering* dapat dibedakan menjadi dua macam yaitu:
    1. *User-based collaborative filtering* <br>
    Model ini membuat rekomendasi produk kepada seorang user yang di mana produk tersebut disukai oleh user lain yang memiliki kesamaan dengan user yang diberikan rekomendasi. Misalkan, apabila A dan B menyukai satu film yang sama. Kemudian, A menyukai satu film baru. Sistem akan merekomendasikan kepada B film baru tersebut. Karena sistem menilai user A dan B memiliki similaritas yang cukup tinggi.
    2. *Item-based collaborative filtering* <br>
    Sistem ini mengidentifikasi item yang serupa berdasarkan rating-rating user sebelumnya. Misalkan, apabila user A, B, dan C memberikan bintang 5 terhadap buku X dan Y dan kemudian user D menyukai buku X. Sistem akan mengenali bahwa buku X dan Y memiliki similaritas yang tinggi berdasarkan rating yang diberikan user A, B, dan C.
    
    
- *Content-based filtering* : Sistem rekomendasi ini fokus terhadap kemiripan atribut suatu produk dengan produk lainnya. Berbeda dengan *collaborative filtering* yang memerlukan user lain untuk menghasilkan sebuah sistem rekomendasi, *content-based filtering* fokus terhadap produk. Misalkan, memberi rekomendasi berdasarkan kesamaan judul, deskripsi, atau genre dari produk yang satu dengan produk lainnya.


- *Demographic based recommender system* : Sistem rekomendasi ini mengkategorisasi user berdasarkan kelas demografik dari user tersebut sehingga memerlukan market research terhadap data untuk mengimplementasikan algoritma ini. Keunggulannya adalah algoritma ini tidak memerlukan history dari user rating.


- *Hybrid filtering* : Sistem rekomendasi ini menggunakan kombinasi antara dua atau lebih dari sistem yang disebutkan sebelumnya.

# Projek Resep

Dalam proyek ini dibuat *web application* yang memiliki fitur-fitur sebagai berikut:
- **Fitur pencarian resep** : Fitur untuk mendapatkan rekomendasi resep berdasarkan bahan-bahan masakan yang dimiliki oleh user. Misalkan, apabila user memiliki bahan masakan yaitu bawang merah, bawang putih, dan ayam. Maka sistem akan merekomendasikan makanan yang memiliki resep dengan bahan-bahan yang serupa dengan apa yang dimiliki oleh user.
- **Fitur rekomendasi resep** : Fitur rekomendasi resep makanan berdasarkan makanan lainnya menggunakan *content-based filtering* terhadap *title* dari resep makanan tersebut. Misalnya, apabila user mengklik resep dengan judul Ayam Bakar Madu, maka sistem akan memberikan rekomendasi resep lain yang memiliki judul yang serupa dengan Ayam Bakar Madu.

## Fitur Pencarian Resep

Untuk mendapatkan rekomendasi resep berdasarkan bahan-bahan yang dimiliki oleh user digunakan kode fast api - python sebagai berikut:

```python

data = pd.read_csv('dataset/dataset_ayam_resepkoki.csv')
data2 = data[['title_resep', 'bahan_resep']].copy()

@app.get("/search/{bahan_bahan}")
def cari_resep(bahan_bahan: str):
    bahan = bahan_bahan.split(',')
    hasil = pd.Series(np.zeros((len(data2))))
    for item in bahan:
        hasil += data2['bahan_resep'].str.contains(item).map({False:0, True:1})
    index_search = hasil.sort_values(ascending=False).head(50).index
    return data[['image_url', 'title_resep']].loc[index_search].to_dict('records')
```

User memasukkan bahan-bahan dalam string yang dipisahkan oleh tanda `,` (koma), misalkan `'bawang merah, ayam, 'cabai'`. Oleh karena itu, kita akan memisahkan bahan-bahan tersebut menggunakan method split sehingga string tersebut akan menjadi list yang berisi bahan-bahan yang disimpan dalam variabel `bahan` ( dari contoh diatas maka `bahan` akan berisi `['bawang merah' , 'ayam', 'cabai']` ). Kemudian kita menginisiasi variabel `hasil` bertipe Series yang bernilai 0 sejumlah data yang ada.

Selanjutnya, kita akan melakukan looping terhadap item-item yang terdapat di variabel `bahan`. Apabila bahan tersebut terdapat di dalam bahan dari resep masakan pada suatu index dari data (bernilai True) maka nilai pada index tersebut akan ditambahkan 1 sedangkan jika tidak ada (bernilai False) maka akan ditambahkan nilai 0.

Looping ini akan menghasilkan Series `hasil` sejumlah banyaknya data, dengan nilai maksimal sebanyak jumlah item yang terdapat di dalam list `bahan` sedangkan nilai minimumnya adalah 0. Kemudian, Series `hasil` nilainya akan diurutkan dari yang terbesar ke yang terkecil. Nilai terbesar berarti resep yang memiliki kesesuaian dengan bahan-bahan yang dimiliki oleh user sedangkan nilai yang terkecil berarti resep yang tidak/hanya sedikit memiliki kesesuaian dengan bahan-bahan yang dimiliki user. Series yang telah diurutkan kemudian diambil sebanyak 50 data pertama dan hanya indexnya saja. Index ini kemudian disimpan dalam variabel `index_search`. Fungsi kemudian mengembalikan data berupa kolom `image_url` dan `title_resep` dari index yang terdapat dalam variabel `index_search`. 

## Fitur Rekomendasi Resep

Untuk dapat membuat rekomendasi resep digunakan kode python sebagai berikut:

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

count_vec = CountVectorizer()
count_vec_bahan_resep = count_vec.fit_transform(data['title_resep'])

cos_sim = cosine_similarity(count_vec_bahan_resep)
cos_sim_df = pd.DataFrame(cos_sim, index=data['title_resep'], columns=data['title_resep'])
```

Dalam projek ini, untuk dapat membuat rekomendasi dengan sistem *content-based filtering* dari title resep digunakan modul `cosine_similarity`. Modul ini dapat diperoleh dari `sklearn.metrics.pairwise`.

Sebelum menggunakan cosine_similarity, title resep yang terdapat dalam data perlu ditransformasi menggunakan `CountVectorizer`. CountVetorizer dapat diperoleh dari modul `sklearn.feature_extraction.text`. CountVectorizer yang digunakan pada kolom `title_resep` dalam dataset akan memvektorisasi jumlah kata-kata yang terdapat pada tiap data. Kolomnyanya merupakan seluruh kata yang terdapat dari title resep sedangkan indeksnya adalah title_resep itu sendiri. CountVectorizer akan menghasilkan sparse matrix karena memiliki angka 0 yang cukup banyak. Hasil transformasi CountVectorizer disimpan dalam variabel `count_vec_bahan_resep`.

Setelah melakukan vektorisasi, hasil vektorisasi tersebut dapat digunakan untuk perhitungan cosine_similarity. *Cosine similarity* merupakan konsep yang cukup sederhana. *Cosine similarity* antara dua buah vektor akan menghitung sudut cosinus antara kedua vektor tersebut. Berikut ini adalah formula dari *cosine similarity*:

![](http://s0.wp.com/latex.php?latex=++%5Cdisplaystyle++%5Cvec%7Ba%7D+%5Ccdot+%5Cvec%7Bb%7D+%3D+%5C%7C%5Cvec%7Ba%7D%5C%7C%5C%7C%5Cvec%7Bb%7D%5C%7C%5Ccos%7B%5Ctheta%7D+%5C%5C+%5C%5C++%5Ccos%7B%5Ctheta%7D+%3D+%5Cfrac%7B%5Cvec%7Ba%7D+%5Ccdot+%5Cvec%7Bb%7D%7D%7B%5C%7C%5Cvec%7Ba%7D%5C%7C%5C%7C%5Cvec%7Bb%7D%5C%7C%7D++&bg=ffffff&fg=000000&s=0) 

*Cosine similarity* dapat menggambarkan seberapa dekat dua buah dokumen dari sudut yang dihasilkan dari perhitungan. Apabila nilai cos dari sudut yang dihasilkan mendekati satu maka dua buah dokumen tersebut memiliki kemiripan yang tinggi. Sebaliknya, apabila nilai cos dari sudut yang dihasilkan dari dua buah dokumen tersebut mendekati 0 maka dua buah dokumen tersebut memiliki kemiripan yang sedikit.

![](http://blog.christianperone.com/wp-content/uploads/2013/09/cosinesimilarityfq1.png)

Dengan membuat cosine similarity terhadap `count_vec_bahan_resep` maka akan dihasilkan matriks yang akan menghitung similarity antar title dari data. Matriks ini kemudian disimpan ke dalam sebuah variabel `cos_sim`. Dan kemudian dibuat menjadi dataframe dengan index dan kolom berupa `title_resep` dalam variabel `cos_sim_df`.

Setelah mendapatkan dataframe yang berisikan cosine similarity dibuat kode fast api-python sebagai berikut:

```python
@app.get("/rekomendasi/{nama_resep}")
def get_rekomendasi(nama_resep):
    ls_image_url = []
    for rekom in list(cos_sim_df[nama_resep].sort_values(ascending=False).iloc[1:7].index):
        ls_image_url.append(data[data['title_resep'] == rekom]['image_url'].values[0])

    print(ls_image_url)
    output = pd.DataFrame({
        'title_resep':list(cos_sim_df[nama_resep].sort_values(ascending=False).iloc[1:7].index),
        'image_url':ls_image_url
    })
    return output.to_dict('records')
```

`cos_sim_df[nama_resep]` akan menghasilkan Series cos similarity dari nama resep. Series ini kemudian diurutkan nilainya dari yang tertinggi (resep yang paling mirip) ke terendah (resep yang paling tidak mirip). Kemudian hanya kita ambil indeks ke-1 sampai dengan 7 dan hanya mengambil indexnya saja (karena hanya mau mengambil 6 rekomendasi resep yang paling mirip). Kita tidak mengambil indeks ke-0, karena indeks ke-0 pasti berisi resep itu sendiri (cosine similarity bernilai 1). Kemudian kita akan mencari image_url dan title_resep dari 6 resep rekomendasi tersebut dan membuatnya menjadi dataframe yang diberi nama `output`.