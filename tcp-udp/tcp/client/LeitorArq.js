const fs = require('fs');

const funLer = (caminho) => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export default funLer;

