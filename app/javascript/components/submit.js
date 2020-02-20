import Rails from '@rails/ujs'

const submitPhoto = () => {
  const file = document.getElementById('upload_photo')
  if (file) {
    console.log('found file');
    file.addEventListener('change', (event) => {
      const form = document.getElementById('new_upload')
      console.log('change happened and found form');
      Rails.fire(form,'submit')
    })
  }
}

export { submitPhoto };
