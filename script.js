<form id="upload-form">
  <input type="file" id="image-file" accept="image/*" />
  <button type="submit">Upload</button>
</form>

<script>
const form = document.getElementById('upload-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const file = document.getElementById('image-file').files[0];
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });
  
const cleanedImage = await response.blob();

const express = require('express');
const multer = require('multer');
const exif = require('exif-parser');
const piexif = require("piexifjs");
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  const image = req.file.buffer;
  const parser = exif.create(image);
  const result = parser.parse();
  const exifData = result.tags;
  
  const cleanedImage = piexif.remove(image);
  res.send(cleanedImage);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


  
});
</script>
