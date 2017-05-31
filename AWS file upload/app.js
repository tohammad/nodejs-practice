var fs = require('fs');
var S3FS = require('s3fs');
var bodyParser = require("body-parser");



var s3fsImplementation = new S3FS('hammadtestbucket123', {
    accessKeyId: 'AKIAIOKK373HEFOVNO3A',
    secretAccessKey: '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'
});

//s3fsImplementation.create();
var express = require('express');
var app = express();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
app.use(multipartyMiddleware);
app.use(bodyParser.json({limit:'10mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb', extended:true}));
app.post('/fileupload', function(req, res){
    var file = req.files.file;
    var stream = fs.createReadStream(file.path);
    return s3fsImplementation.writeFile(file.originalFilename, stream).then(function() {
        fs.unlink(file.path, function(err){
            if(err) {
                console.error(err);
            }
        })
    });
});

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
