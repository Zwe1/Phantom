
$(function(){
	//首页顶部右侧搜索框
	$('.Input .left-inp').click(function(){
		$('.Input input').mouseover = null;
		$('.Input .hide-list').addClass('_show');
		$('.Input .inside-cont').fadeOut();
		//$('.Input .inside-cont').addClass('_hide');
	});
	$('.Input .left-inp').blur(function(){
		$('.Input .hide-list').removeClass('_show');
		$('.Input .inside-cont').fadeIn();
	});
	//二级菜单样式
	$('.sec-menu .sec-words ul li').addClass('connect');
	$('.banner .sec-pro ul li').addClass('connect');
	$('.sec-menu .sec-words ul li').mouseover(function(){
		
		$('.banner .sec-pro ul li').eq($(this).index()).addClass('Cur-page');
			
	});
	$('.connect').mouseout(function(){
		$('.banner .sec-pro ul li').eq($(this).index()).removeClass('Cur-page');
		;
	});
	
	//轮播区域隐藏块
	$('.over').mouseover(function(e){
		e.cancelBubble = true;
		$('.children').eq($(this).index()).addClass('show');
	}).mouseout(function(e){
		e.cancelBubble = true;
		$('.children').eq($(this).index()).removeClass('show')
	});
	//明星单品
	$('.single-pro .r-tip span').click(function(){
		if($(this).hasClass('clkable')){
			$(this).removeClass('clkable').siblings().addClass('clkable');
			$(this).index()==1?$('.moveable-item').css('margin-left','-1270px'):$('.moveable-item').css('margin-left','0px');
		}
	});
	

});