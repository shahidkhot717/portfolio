window.addEventListener('scroll',function (){
	var header = document.querjySelector("header");
	header.classList.toggle("stick",window.scrollY > 0);
});


