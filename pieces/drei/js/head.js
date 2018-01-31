$(function(){
	$('.right-thief>li').mouseover(function(){
		$(this).css('background','#fff');
		$(this).children('.nav-common').show();
	}).mouseout(function(){
		$(this).children('.nav-common').hide();
		$(this).css('background','#f8f8f8');
	});
	$('#nav-Ritem8').mouseover(function(){
		$(this).children('ul').show();
	}).mouseout(function(){
		$(this).children('ul').hide();
	});
	/*搜索框左侧下拉菜单显示
	$('#search-head').bind('mouseover',function(){
		$(this).css('overflow','visible');
		$(this).css('border','#eee');

	});*/
	/*二维码隐藏/显示*/
	$('.erweima').mouseover(function(){
		$('#inside-cont a').css('color','#ff6700');
		$('.hide-erweima').show(300);
	});
	$('.hide-erweima').mouseout(function(){
		$('#inside-cont a').css('color','rgb(136,136,136)');
		$('.hide-erweima').hide(300);
	});
	/*侧边导航栏滑动隐藏区域*/
	/*第一类展示*/
	$('.sideBar ul li:nth-child(odd)').mouseover(function(e){
		e.cancelBubble = true;
		$('.missing-bar').eq(0).show();
		$(this).addClass('hoverColorCg');
		$(this).children
	});
	$('.sideBar ul li:nth-child(odd)').mouseout(function(e){
		e.cancelBubble = true;
		$('.missing-bar').eq(0).hide();
		$(this).removeClass('hoverColorCg');
	});
	/*第二类展示*/
	$('.sideBar ul li:nth-child(even)').mouseover(function(e){
		e.cancelBubble = true;
		$('.missing-bar').eq(1).show();
		$(this).addClass('hoverColorCg');
		/*alert($(this).index())*/
	});
	$('.sideBar ul li:nth-child(even)').mouseout(function(e){
		e.cancelBubble = true;
		$('.missing-bar').eq(1).hide();
		$(this).removeClass('hoverColorCg');
	});
	/*轮播图下部*/
	/*$('#banner-bot ul li').mouseover(function(){
		$('.side-btn p').show(300);
	}).mouseout(function(){
		$('.side-btn p').hide(300);
	});*/
	$('.side-btn .right-p').bind('click',function(){
		$('.moveable-item').css('left','-700px');
		$('.side-btn .right-p').css({'color':'#ff4300','opacity':0.5});
		$('.side-btn .left-p').css({'color':'#ff4300','opacity':1});
	});
	$('.side-btn .left-p').bind('click',function(){
		$('.moveable-item').css('left','0px');
		$('.side-btn .left-p').css({'color':'#ff4300','opacity':0.5});
		$('.side-btn .right-p').css({'color':'#ff4300','opacity':1});
	});
});