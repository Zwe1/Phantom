(function(){
	//获取结点
	var oBox = document.getElementById('box');
	var oUl = oBox.getElementsByTagName('ul')[0];
	var oWrap = document.getElementById('wrap');
	var oFrame = document.getElementById('frame');
	var oPhoto = document.getElementById('photo');
	var cover=document.getElementById('cover');
	var oBack=document.getElementById('back');
	var length = 125;
	//调用初始化函数
	init();
	var aLi = oUl.getElementsByTagName('li');
	(function(){
		var oBtn = document.getElementById('btn');
		var aP = oBtn.getElementsByTagName('p');
		oBtn.onmousedown = function(e){
			e.cancelBubble = true;
		};
		aP[0].onclick = Table;
		aP[1].onclick = Sphere;
		aP[2].onclick = Helix;
		aP[3].onclick = Grid;
	})();
	//初始化
	function init(){
		for ( var i=0;i<length;i++ )
		{
			
			var oLi = document.createElement('li');
			oUl.appendChild( oLi );
			oLi.style.transform = 'translate3D('+ (Math.random()*4000-2000) +'px,'+ (Math.random()*4000-2000) +'px,'+ (Math.random()*5000-2500) +'px)';
			//添加内容
			var p1=document.createElement('p');
			oLi.appendChild(p1);
			var p2=document.createElement('p');
			oLi.appendChild(p2);
			p1.innerHTML='addItems ————';
			p2.innerHTML='Time: 2016-11-13';
			p1.className='content';
			p2.className='Ctime';
			oLi.onclick=function(e){
				cover.style.display='block';
				//transiton时不能改变display方式。所以延迟执行以下部分
				setTimeout(function(){cover.style.transform='scale(0.9)';},10);
				setTimeout(function(){cover.style.opacity=1;},10);
				e.cancelBubble=true;
			}
			var close=document.getElementById('close');
			close.onclick=function(){
				cover.style.transform = 'translateZ(-20000px) rotateY(360deg) ';
				cover.style.opacity=0;
				
			}
		};
		//按钮点击事件
		oPhoto.onclick=function(){
			oWrap.setAttribute('class','left');
			oFrame.setAttribute('class','left');
		}
		oBack.onclick=function(){
			oWrap.removeAttribute('class','left');
			oFrame.removeAttribute('class','left');
		}
		var roX = 0,roY = 0,trZ = -2000;
		var xD,yD,xM,yM,xL,yL,x_=0,y_=0,timerM,timerW,nowDate=0;
		//鼠标操作动画
		document.onmousedown = function(e){
			clearInterval(timerM);
			xD = xL = e.pageX;
			yD = yL = e.pageY;
			this.onmousemove = function(e){
				xM = e.pageX;
				yM = e.pageY;
				
				x_ = xM-xL;
				y_ = yM-yL;

				roX -= 0.15*y_;
				roY += 0.15*x_;
				
				xL = e.pageX;
				yL = e.pageY;
				oBox.style.transform = 'translateZ('+trZ+'px) rotateX('+roX+'deg) rotateY('+roY+'deg)';
			};
			this.onmouseup = function(e){
				this.onmousemove = null;
				timerM = setInterval(function(){
					x_ *= 0.95;
					y_ *= 0.95;
					roX -= 0.15*y_;
					roY += 0.15*x_;
					if ( Math.abs(x_)<=0.2 && Math.abs(y_)<=0.2 )clearInterval(timerM);
					oBox.style.transform = 'translateZ('+trZ+'px) rotateX('+roX+'deg) rotateY('+roY+'deg)';
				},13);
			};
		};
		
		document.onmousewheel!==undefined?document.onmousewheel=scrollFn:document.addEventListener('DoMMouseScroll' , scrollFn);
		function scrollFn(e){
			if ( new Date() - nowDate > 210 )
			{
				nowDate = new Date();
				var d = e.wheelDelta || -e.detail;
				d<0?zMove(-1000):zMove(1000);
			}
		};

		function zMove( d ){
			clearInterval(timerW);
			var startTime = new Date();
			var start = trZ;
			timerW = setInterval(function(){
				var prop = (new Date() - startTime)/200;
				if ( prop >= 1 )
				{
					prop = 1;
					clearInterval(timerW);
				};
				trZ = start + prop*d
				trZ = Math.max(-15000,trZ);
				trZ = Math.min(210,trZ);
				oBox.style.transform = 'translateZ('+trZ+'px) rotateX('+roX+'deg) rotateY('+roY+'deg)';
			},13);
		};
	};
	
	//四种呈现方式
	function Grid(){
		for (var i=0;i<length;i++ )
		{	
			var d=80;
			var Deg=360/25;
			aLi[i].style.transform = 'rotateZ('+Deg*i+'deg) translateY(580px)';
			
		}
	};
	function Helix(){
		for (var i=0;i<length;i++ )
		{	
			var Deg=360/25;
			var r=500;
			var d=10;
			var x = i%5;
			var y = parseInt(i/5) % 5;
			var z = parseInt(i/25);
			aLi[i].style.transform = 'translate3D('+ (x-2)*350 +'px,'+ (y-2)*390 +'px,'+ (z-2)*1000 +'px)';
			if(z%2==0)
				aLi[i].style.background='rgba(0,0,0,.5)';
			else
				aLi[i].style.background='rgba(255,255,255,.5)';
			
		}
		
	};
	function Table(){
		for (var i=0;i<length;i++ )
		{	
			var alpha=1/250;
			var w=120;
			var h=160;
			var x = i%18;
			var y = parseInt(i/18);
			if(x==9&&y==3)
			{	
				aLi[i].style.transform = 'translateX('+(x-1)*w+'px) translateY('+(y)*h+'px)';
				aLi[i].style.background = 'rgba(33,33,33,.5)';
			}
			else
			{
				aLi[i].style.transform = 'translateX('+(x-9)*w+'px) translateY('+(y-3)*h+'px)';
				aLi[i].style.background = 'rgba(33,33,33,'+alpha*i+')';
			}
		}
	};
	function Sphere(){
		for (var i=0;i<length;i++ )
		{	
			var Deg=parseInt(360/25);
			var e=i%10;
			var r=800;
			var d=20;
			if(i<62)
				{
					aLi[i].style.transform = 'rotateY('+Deg*i+'deg) translateZ('+r+'px) translateY('+(d*i-500)+'px)';
					aLi[i].style.background='rgba(0,0,0,.5)';
		}
			else
				{
					aLi[i].style.transform = 'rotateY('+Deg*i+'deg) translateZ('+r+'px) translateY('+(d*(i-62)-500)+'px) ';
					aLi[i].style.background='rgba(255,255,255,.5)';
			}
		}
	};

})();