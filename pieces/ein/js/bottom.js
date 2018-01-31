$(function (){
	//$('col-pic-right').eq(2).show().siblings().hide();
	$('.part1 ul li').mouseover(function(){
		//找到当前序列号
		var index = $(this).index();
		console.log(index);
		$('.part1-c').eq(index).show().siblings('.part1-c').hide();
	});
	$('.part2 ul li').mouseover(function(){
		//找到当前序列号
		var index = $(this).index();
		console.log(index);
		$('.part2-c').eq(index).show().siblings('.part2-c').hide();
	});
	//内容栏
});