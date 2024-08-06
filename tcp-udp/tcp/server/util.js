const fs = require('fs');

module.exports = function (callback) {
    fs.readdir('./arquivos', (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(files);
    });
}