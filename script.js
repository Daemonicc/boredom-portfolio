const images = document.querySelectorAll('.hide')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  console.log(window.innerHeight)

  const triggerBottom = window.innerHeight / 5 * 4

  images.forEach(image => {
    const imageTop = image.getBoundingClientRect().top

    if(imageTop < triggerBottom){
      image.classList.add('show')
    }else{
      image.classList.remove('show')
    }
  })
}