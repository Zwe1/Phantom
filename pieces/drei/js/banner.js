var Curindex=0,Preindex=0,timer;
//获得图片个数
var length = $('#box #pic img').length;
	//显示第一张图片
	$('#banner-box .firstPic').show().siblings().hide();
	//鼠标停放时图片切换
	$('#btn li').click(function(){ 
		Curindex=$(this).index();
		Play();
		Preindex=Curindex;
	});
	//图片右切换
	$('#right').click(function(){
		if(Curindex>= (length - 1))
		{
			Curindex=0;
			Preindex= (length - 1);
		}
		else{
			Preindex=Curindex;
			Curindex++;
		}
		Play()
	});
	//图片左切换
	$('#left').click(function(){
		if(Curindex<0)
		{
			Curindex= (length - 1);
			Preindex=0;
		}
		else{
			Preindex=Curindex;
			Curindex--;
		}
		Play();
	});
	//自动播放
	function autoPlay(){
		timer=setInterval(
		function(){
			preIndex=Curindex;
			Curindex++;
			if(Curindex> (length - 1))
				{Curindex=0;}
			Play();
		}
		,3000)
	};
	autoPlay();
	//鼠标移动到轮播图上时停止自动播放
	$("#box").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){autoPlay();});
	//图片切换
	function Play(){
		$('#banner-box #btn li').eq(Curindex).addClass('circle').siblings('li').removeClass('circle');
		$('#banner-box #pic img').eq(Curindex).fadeIn().siblings().fadeOut();
	};
