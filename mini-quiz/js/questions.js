// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Ada berapa benua di bumi?",
    answer: "b. 7",
    options: [
      "a. 4",
      "b. 7",
      "c. 9",
      "d. 6"
    ]
  },
    {
    numb: 2,
    question: "Negara yang menjajah indonesia selain Jepang dan Belanda adalah?",
    answer: "d. Portugis, Spanyol, Inggris",
    options: [
      "a. Australia, Rusia, Jerman",
      "b. Korea Utara, China, Amerika",
      "c. Jerman, Amerika, Rusia",
      "d. Portugis, Spanyol, Inggris"
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
    question: "Hewan terkecil di dunia?",
    answer: "c. Amuba",
    options: [
      "a. Kutu Air",
      "b. Tardigrada",
      "c. Amuba",
      "d. Tengu"
    ]
  },
    {
    numb: 5,
    question: "Sabah adalah kawasan yang berada di?",
    answer: "a. Malaysia",
    options: [
      "a. Malaysia",
      "b. Singapura",
      "c. Vietnam",
      "d. Indonesia"
    ]
  },
  {
    numb: 6,
    question: "Hewan dengan solidaritas tinggi adalah?",
    answer: "c. Semut",
    options: [
      "a. Laba-laba",
      "b. Gajah",
      "c. Semut",
      "d. Harimau"
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
    question: "Ketakutan berlebihan terhadap suatu hal disebut?",
    answer: "a. Phobia",
    options: [
      "a. Phobia",
      "b. Trauma",
      "c. Ancaman",
      "d. Ketakutan"
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
    question: "Negara terkaya di dunia?",
    answer: "b. Luksemburg",
    options: [
      "a. Qatar",
      "b. Luksemburg",
      "c. Arab Saudi",
      "d. Amerika Serikat"
    ]
  },
  {
  numb: 12,
    question: "Mamalia tertinggi adalah?",
    answer: "a. Jerapah",
    options: [
      "a. Jerapah",
      "b. Gajah",
      "c. Singa",
      "d. Burung"
    ]
  },
  {
  numb: 13,
    question: "Jumlah provinsi indonesia saat ini?",
    answer: "c. 38 provinsi",
    options: [
      "a. 34 provinsi",
      "b. 36 provinsi",
      "c. 38 provinsi",
      "d. 37 provinsi"
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
    question: "Senjata indonesia saat masa penjajahan?",
    answer: "d. Bambu Runcing",
    options: [
      "a. Samurai",
      "b. Senapan Jarak Jauh",
      "c. Celurit",
      "d. Bambu Runcing"
    ]
  },
  {
  numb: 18,
    question: "Satu-satunya wilayah gunung Indonesia yang bersalju adalah?",
    answer: "c. Jayawijaya, Papua",
    options: [
      "a. Merbabu, Jateng",
      "b. Semeru, Jatim",
      "c. Jayawijaya, Papua",
      "d. Krakatau, Lampung"
    ]
  },
  {
  numb: 19,
    question: "Negara termiskin di dunia?",
    answer: "c. Burundi",
    options: [
      "a. Indonesia",
      "b. Timor Leste",
      "c. Burundi",
      "d. Kongo"
    ]
  },
  {
  numb: 20,
    question: "Tanda-tanda kehidupan di bumi pertama kali terjadi di?",
    answer: "b. Laut",
    options: [
      "a. Darat",
      "b. Laut",
      "c. Gua",
      "d. Langit"
    ]
  },
  {
  numb: 21,
    question: "Kepanjangan dari Satpol PP?",
    answer: "d. Satuan Polisi Pamong Praja",
    options: [
      "a. Satuan Polisi Pemuda Pancasila",
      "b. Satuan Polisi Penarik Pajak",
      "c. Satuan Polisi Para Penilang",
      "d. Satuan Polisi Pamong Praja"
    ]
  },
  {
  numb: 22,
    question: "Jumlah huruf Abjad?",
    answer: "b. 26",
    options: [
      "a. 22",
      "b. 26",
      "c. 28",
      "d. 24"
    ]
  },
  {
  numb: 23,
    question: "Tari Kecak berasal dari?",
    answer: "d. Bali",
    options: [
      "a. Lampung",
      "b. Jawa",
      "c. Baduy",
      "d. Bali"
    ]
  },
  {
  numb: 24,
    question: "29 Februari terjadi 4 tahun sekali, tahun dimana ada tanggal tersebut disebut?",
    answer: "a. Tahun Kabisat",
    options: [
      "a. Tahun Kabisat",
      "b. Tahun Baru Islam",
      "c. Hari Raya Nyepi",
      "d. Hari Buruh Sedunia"
    ]
  },
  {
  numb: 25,
    question: "Negara terbesar dan terkecil di dunia?",
    answer: "a. Rusia terbesar, Vatikan terkecil",
    options: [
      "a. Rusia terbesar, Vatikan terkecil",
      "b. Amerika terbesar, Korut terkecil",
      "c. China terbesar, Singapura terkecil",
      "d. Jerman terbesar, Swiss terkecil"
    ]
  },
  {
  numb: 26,
    question: "Kadal terbesar di dunia?",
    answer: "b. Komodo",
    options: [
      "a. Deny Cagur",
      "b. Komodo",
      "c. Biawak",
      "d. Buaya"
    ]
  },
  {
  numb: 27,
    question: "Hewan yang paling banyak menyebabkan Kematian?",
    answer: "a. Nyamuk",
    options: [
      "a. Nyamuk",
      "b. Ular",
      "c. Kudanil",
      "d. Singa"
    ]
  },
  {
  numb: 28,
    question: "Jepang menjajah Indonesia selama?",
    answer: "d. 3,5 tahun",
    options: [
      "a. 350 tahun",
      "b. 7,2 tahun",
      "c. 4,5 tahun",
      "d. 3,5 tahun"
    ]
  },
  {
  numb: 29,
    question: "Apa saja warna primer?",
    answer: "c. Merah, Kuning, Biru",
    options: [
      "a. Merah, Biru, Ungu",
      "b. Merah, Kuning, Hijau",
      "c. Merah, Kuning, Biru",
      "d. Merah, Hitam, Putih"
    ]
  },
  {
  numb: 30,
    question: "Berapa banyak negara yang diakui di dunia?",
    answer: "a. 195 negara",
    options: [
      "a. 195 negara",
      "b. 206 negara",
      "c. 186 negara",
      "d. 194 negara"
    ]
  },
];
