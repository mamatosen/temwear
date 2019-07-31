var fs = require('fs');
let files_;

fs.readdir('.', function(err, files) {
    console.log(files);
    files_ = files;
});

export {files_ as files};