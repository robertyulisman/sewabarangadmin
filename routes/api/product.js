const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');

// Routes

// @Routes  GET All Product /api/product/
// @Private True
router.get('/', (req, res) => {
  Product.find().then((product) => {
    res.json(product);
  });
});

// @Routes  GET one Product /api/product/:_id
// @Private True
router.get('/:_id', (req, res) => {
  Product.findById(req.params._id).then((product) => {
    res.json(product);
  });
});

// @Routes  POST Product /api/product/
// @Private True
router.post('/', async (req, res) => {
  const {
    subkategori,
    namaBarang,
    harga,
    gambarBarang,
    alamat,
    kabupaten,
    provinsi,
    deskripsi,
    jaminan,
  } = req.body;
  const newProduct = new Product({
    subkategori,
    namaBarang,
    harga,
    gambarBarang,
    alamat,
    kabupaten,
    provinsi,
    deskripsi,
    jaminan,
  });

  await newProduct
    .save()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => console.log('error is : ', err));
});

// @Routes  PUT/UPDATE Product /api/product/status/:_id
// @Private True
// ini merubah status produk soalnya, cuma merubah dari Tidak tersedia, menjd Tersedia
router.post('/status/:_id', async (req, res) => {
  if (!req.body.status) {
    res.status(404).json({ msg: 'Status required!' });
  }
  try {
    const status = req.body.status;
    await Product.findById(req.params._id).then((product) => {
      product.statusItem = status;
      product.save().then((result) => {
        res.status(200).json(result);
      });
    });
  } catch (err) {
    res.status(404).json({ msg: 'Terjadi kesalahan!' });
  }
});

// @Routes  PUT/UPDATE Product /api/product/:_id
// @Private True
router.put('/:_id', (req, res) => {
  Product.findByIdAndUpdate(req.params._id, {
    subkategori: req.body.subkategori_id,
  })
    .then((product) => {
      res.json({ msg: 'success', data: product });
    })
    .catch((err) => console.log(err));
});

// @Routes  DELETE Product /api/product/:_id
// @Private True
router.delete('/:_id', (req, res) => {
  Product.findByIdAndDelete(req.params._id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
});

router.put('/update/:_id', (req, res) => {
  const {
    subkategori,
    namaBarang,
    harga,
    gambarBarang,
    alamat,
    kabupaten,
    provinsi,
    deskripsi,
    jaminan,
  } = req.body;
  Product.findById(req.params._id).then((data) => {
    if (subkategori) {
      data.subkategori = subkategori;
    }
    if (namaBarang) {
      data.namaBarang = namaBarang;
    }
    if (harga) {
      data.harga = harga;
    }
    if (gambarBarang) {
      data.gambarBarang = gambarBarang;
    }

    if (alamat) {
      data.alamat = alamat;
    }

    if (kabupaten) {
      data.kabupaten = kabupaten;
    }
    if (provinsi) {
      data.provinsi = provinsi;
    }
    if (deskripsi) {
      data.deskripsi = deskripsi;
    }
    if (jaminan) {
      data.jaminan = jaminan;
    }

    data
      .save()
      .then((data) => {
        res.json({ msg: 'success', res: data });
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  });
});

module.exports = router;
