from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np

from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

app = FastAPI()
origins = [
    "http://localhost:3000",
    "http://view:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Deklarasi data yang digunakan
data = pd.read_csv('dataset/df_gabungan.csv')
data2 = data[['title_resep', 'bahan_resep']].copy()

# Persiapan data untuk cosine similarity
count_vec = CountVectorizer()
count_vec_title = count_vec.fit_transform(data['title_resep'])

cos_sim = cosine_similarity(count_vec_title)
cos_sim_df = pd.DataFrame(cos_sim, index=data['title_resep'], columns=data['title_resep'])

@app.get("/search/{bahan_bahan}")
def cari_resep(bahan_bahan: str):
    bahan = bahan_bahan.split(',')
    hasil = pd.Series(np.zeros((len(data2))))
    for item in bahan:
        hasil += data2['bahan_resep'].str.contains(item).map({False:0, True:1})
    index_search = hasil.sort_values(ascending=False).head(50).index
    return data[['image_url', 'title_resep']].loc[index_search].to_dict('records')


@app.get("/resep/{nama_resep}")
def get_resep(nama_resep: str):
    output = data[data['title_resep'] == nama_resep]
    return output.to_dict('records')

@app.get("/rekomendasi/{nama_resep}")
def get_rekomendasi(nama_resep):
    ls_image_url = []
    for rekom in list(cos_sim_df[nama_resep].sort_values(ascending=False).iloc[1:7].index):
        ls_image_url.append(data[data['title_resep'] == rekom]['image_url'].values[0])

    output = pd.DataFrame({
        'title_resep':list(cos_sim_df[nama_resep].sort_values(ascending=False).iloc[1:7].index),
        'image_url':ls_image_url
    })
    return output.to_dict('records')