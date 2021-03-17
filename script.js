var slideIndex = 0

const Modal = {
	open(id) {
		document.querySelector('.modal')
			.classList
      .add('active')
     slideIndex = id
     slideIndex = parseInt(slideIndex)
    showSlides(slideIndex);
    return slideIndex
    
	},
	close() {
		document.querySelector('.modal')
			.classList
			.remove('active')		
	}
}
// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  currentSlide(slideIndex)
  return slideIndex
}

// Thumbnail image controls
function currentSlide(slideIndex) {
  showSlides(slideIndex);
  return slideIndex
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";

}

function pula(){
	let maps = document.querySelector('.map')
	console.log(maps)
	maps.style.animation = 'jump .8s  normal infinite'
	
}
function removePula(){
	let maps = document.querySelector('.map')
	maps.style.animation = ''
}