const multer = require("multer");
const path = require("path");
const mime = require('mime-types');


class Podcast {
    folderName;
    Podcast(folderName) {
        this.folderName = folderName;
    }
    multerStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '..', this.folderName));
        },
        filename: (req, file, cb) => {
            let extension = path.extname(file.originalname);
            if (!extension) {
                extension = '.' + mime.extension(file.mimetype);
            }
            cb(null, file.fieldname + '-podcast-' + Math.floor(1000000 + Math.random() * 9000000) + extension);
        }
    })
}

// for podcaste =>
const podcast = new Podcast('podcast');

exports.podcastUploads = multer({ storage: podcast.multerStorage });