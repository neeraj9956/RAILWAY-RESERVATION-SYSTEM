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
  // You can do something with the cleaned image here, like display it in an img tag
});
</script>
