const multer = require('multer');

const upload = multer({
    dest: 'uploads/'
}); //upload here, is a function, which runs when a file comes, multer helps save the file in a folder and store it with a non conflicting name and save details of the file

module.exports = upload;