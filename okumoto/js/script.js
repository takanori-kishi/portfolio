$(function(){
	//変数の宣言
	var classname = 'is_active';
	var duration = 500;
	var $body = $('body');
	var $target = $('#trg_nav');
	// 処理
	$target.click(function(){
		evtClickSpNav($(this));
		createOverlay($(this));
		});
		$(window).resize(function(){
			var ww = $(window).innerWidth();
			var bp = 640;
			if( ww > bp ){
				$target.removeClass(classname);
				$target.prev().removeClass(classname);
				$('#overlay').remove();				}
			});
		//関数の宣言
		function evtClickSpNav( $t ){
			 if( $t.hasClass(classname) ){
				 $t.removeClass(classname);
				 $t.prev().removeClass(classname);
		}else{
			$t.addClass(classname);
			$t.prev().addClass(classname);
			}
}
function createOverlay( $t){
	if ( $t.hasClass(classname) ){
	var $back = $('<div id="overlay"></div>').appendTo($body);
	$back.animate({'opacity':1});
	}else{
		 $body.find('#overlay').animate({'opacity':0},function(){ $(this).remove(); });
	}
	}
});