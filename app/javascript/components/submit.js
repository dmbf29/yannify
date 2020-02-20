const submitPhoto = () => {
  const file = document.getElementById('upload_photo')
  if (file) {
    file.addEventListener('change', (event) => {
      const label = document.querySelector('label')
      label.innerHTML = "<i class='fas fa-compact-disc fa-spin'></i>"
      const form = document.getElementById('new_upload')
      form.submit()
    })
  }
}

export { submitPhoto };
