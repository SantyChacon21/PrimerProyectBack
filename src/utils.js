const multer = require('multer')


//destino y nombre de archivos
const storage = multer.diskStorage({
    destination: function name(req, file, cb) {
        cb(null, `${__dirname}/public/images`)
    },
    filename: function(req, file, cb) {
        console.log('file: ',file)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})