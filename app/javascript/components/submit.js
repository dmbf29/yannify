const submitPhoto = () => {
  const file = document.getElementById('upload_photo')
  if (file) {
    file.addEventListener('change', (event) => {
      const form = document.getElementById('new_upload')
      form.submit()
    })
  }
}

export { submitPhoto };
