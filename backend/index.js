const express = require('express');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  const selfieFile = req.files.selfie;

  selfieFile.mv('./selfie.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

app.get('/', function(req, res) {
  res.status(200).send(":)");
});

var server = app.listen(8000, function () {
    console.log("Affrmitive: ", server.address().port);
});