
$(function () {
    $('.comment').hide();
    $('li').hover(
    function () {
        $(this).children('.comment').fadeIn('fast');
    },
    function () {
        $(this).children('.comment').fadeOut('fast');
    });
$(function () {
	  var typed6 = new Typed('#typed6', {
    strings: ['初めまして、キシと申します。<br>この度は私のポートフォリオにお越しいただきありがとうございます。<br>秋雨の候、日増しに寒いこの頃でございますが、<br>貴社におかれましては、ますますご隆盛のこととお喜び申し上げます。                                      <br>'],
    typeSpeed: 70,
    backSpeed: 10,
    loop: true
  });
  });
  });
$(function(){
// #で始まるリンクをクリックしたら実行されます
$('a[href^="#"]').click(function() {
  // スクロールの速度
	var speed = 400; // ミリ秒で記述
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;// aタグで別リンクに飛ぶのを防止
});
});
