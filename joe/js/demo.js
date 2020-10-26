
var name = prompt('名前をいれてください、何処かが変わります。');

$(function(){
	$('.header-title').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
	var elm = document.getElementById('anata');
	if(name){
		elm.innerHTML = name+'さん';
	}
	});




