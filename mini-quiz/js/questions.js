// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Ada berapa zona waktu di Rusia?",
    answer: "b. 11",
    options: [
      "a. 15",
      "b. 11",
      "c. 14",
      "d. 16"
    ]
  },
    {
    numb: 2,
    question: "Berapa banyak garis yang ada di bendera Amerika Serikat?",
    answer: "d. 13.7 garis merah dan 6 garis putih",
    options: [
      "a. 20 garis merah dan 3 garis putih",
      "b. 16.4 garis merah dan 7 garis putih",
      "c. 10.3 garis merah dan 5 garis putih",
      "d. 13.7 garis merah dan 6 garis putih"
    ]
  },
    {
    numb: 3,
    question: "Pegunungan terpanjang didunia adalah?",
    answer: "c. Andes",
    options: [
      "a. Everest",
      "b. Fuji",
      "c. Andes",
      "d. Jaya Wijaya"
    ]
  },
    {
    numb: 4,
    question: "Berapa banyak kunci piano?",
    answer: "c. 88 kunci, 52 putih dan 36 hitam",
    options: [
      "a. 69 kunci, 43 putih dan 26 hitam",
      "b. 90 kunci, 75 putih dan 15 hitam",
      "c. 88 kunci, 52 putih dan 36 hitam",
      "d. 100 kunci, 66 putih dan 34 hitam"
    ]
  },
    {
    numb: 5,
    question: "Berapa banyak tulang yang dimiliki rata-rata orang dewasa?",
    answer: "a. 206",
    options: [
      "a. 206",
      "b. 179",
      "c. 221",
      "d. 237"
    ]
  },
  {
    numb: 6,
    question: "Apakah laba-laba termasuk serangga?",
    answer: "c. Tidak",
    options: [
      "a. Iya",
      "b. Mungkin",
      "c. Tidak",
      "d. Termasuk"
    ]
  },
  {
  numb: 7,
    question: "Hewan apa yang memiliki 10 hati?",
    answer: "b. Cacing tanah",
    options: [
      "a. Kecoa",
      "b. Cacing tanah",
      "c. Capybara",
      "d. Ulat sagu"
    ]
  },
  {
  numb: 8,
    question: "Apa kota terpadat didunia?",
    answer: "c. Tokyo, Jepang",
    options: [
      "a. Bon, Jerman",
      "b. Jakarta, Indonesia",
      "c. Tokyo, Jepang",
      "d. New York, AS"
    ]
  },
  {
  numb: 9,
    question: "Ibu kota kanada?",
    answer: "a. Ottawa",
    options: [
      "a. Ottawa",
      "b. Toronto",
      "c. Montreal",
      "d. Vancouver"
    ]
  },
  {
  numb: 10,
    question: "Dalang peristiwa G30S PKI adalah?",
    answer: "d. D.N Aidit",
    options: [
      "a. Soedirman",
      "b. Murad Aidit",
      "c. Nasution",
      "d. D.N Aidit"
    ]
  },
  {
  numb: 11,
    question: "Tahun berapa uni soviet bubar?",
    answer: "b. Desember 1991",
    options: [
      "a. Maret 1989",
      "b. Desember 1991",
      "c. Januari 1946",
      "d. Agustus 1997"
    ]
  },
  {
  numb: 12,
    question: "Universitas tertua yang masih beroperasi?",
    answer: "a. Al Qarawiyying, Maroko",
    options: [
      "a. Al Qarawiyying, Maroko",
      "b. King Saud, Arab Saudi",
      "c. Zhejiang, China",
      "d. UGM, Malang"
    ]
  },
  {
  numb: 13,
    question: "10 Angka pertama dari π (pi) adalah?",
    answer: "c. 3,1415926535",
    options: [
      "a. 3,141592654",
      "b. 3,141592920",
      "c. 3,1415926535",
      "d. 3,1419343268"
    ]
  },
  {
  numb: 14,
    question: "Bahasa yang paling banyak digunakan adalah?",
    answer: "a. Mandarin",
    options: [
      "a. Mandarin",
      "b. Arab",
      "c. Batak",
      "d. Spanyol"
    ]
  },
  {
  numb: 15,
    question: "Hewan paling berbisa didunia?",
    answer: "b. Tawon Laut",
    options: [
      "a. Ular Weling",
      "b. Tawon Laut",
      "c. Tarantula",
      "d. Tomcat"
    ]
  },
  {
  numb: 16,
    question: "Berapa umur bumi?",
    answer: "d. 4,5 Milyar tahun",
    options: [
      "a. 3,9 Milyar tahun",
      "b. 7,2 Milyar tahun",
      "c. 5,5 Milyar tahun",
      "d. 4,5 Milyar tahun"
    ]
  },
  {
  numb: 17,
    question: "Bulan apa kapal Titanic tenggelam?",
    answer: "a. April, 1912",
    options: [
      "a. April, 1912",
      "b. Februari, 1909",
      "c. Juli, 1912",
      "d. September, 1909"
    ]
  },
  {
  numb: 18,
    question: "Berapa panjang ukuran kolam renang untuk olimpiade?",
    answer: "c. 50 meter",
    options: [
      "a. 42 meter",
      "b. 28 meter",
      "c. 50 meter",
      "d. 60 meter"
    ]
  },
  {
  numb: 19,
    question: "Negara penemu es krim adalah?",
    answer: "c. China",
    options: [
      "a. Swiss",
      "b. Turki",
      "c. China",
      "d. Oman"
    ]
  },
  {
  numb: 20,
    question: "Berapa jumlah ayat dalam Al-Qur'an menurut ulama Al-Kufi dan Syekh Nawawi?",
    answer: "b. Al-Kufi 6.236 ayat, Syekh Nawawi 6.666 ayat",
    options: [
      "a. Al-Kufi 6.205 ayat, Syekh Nawawi 6.436 ayat",
      "b. Al-Kufi 6.236 ayat, Syekh Nawawi 6.666 ayat",
      "c. Al-Kufi 6.217 ayat, Syekh Nawawi 6.232 ayat",
      "d. Al-Kufi 6.223 ayat, Syekh Nawawi 6.566 ayat"
    ]
  },
];