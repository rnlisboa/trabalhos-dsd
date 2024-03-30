const fs = require('fs');

module.exports = function (caminhoArquivo, callback) {
    fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}


