var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;
	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyCount = 0;
}
momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.bigEye.src = './src/bigEye0.png';
	this.bigBody.src = './src/bigSwim0.png';
	this.angle = 0;
} 
//大鱼跟随鼠标移动 aim目标位置 cur当前位置 ratio 跟随速度
function lerpDistance(aim, cur, ratio){
	var delta = cur - aim;
	return aim + delta * ratio;
}
//大鱼随指针旋转
function lerpAngle(a, b, t) {
	var d = b - a;
	if (d > Math.PI) {
		d = d - 2 * Math.PI;
	}
	if (d < - Math.PI) {
		d = d + 2 * Math.PI;
	}
	return a + d * t;
}
momObj.prototype.draw = function(){

	//lerp x, y 就是一个值趋向于一个目标值
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);
	//delta angle
	//Math.atan2(y, x);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI; //返回值-PI ~ PI
	//lerp angle
	this.angle = lerpAngle(beta, this.angle, 0.6);
	//tail
	this.momTailTimer += deltaTime;
	if (this.momTailTimer > 50) {
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}
	//eye
	this.momEyeTimer += deltaTime;
	if (this.momEyeTimer > this.momEyeInterval) {
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if (this.momEyeCount == 0) {
			this.momEyeInterval = Math.random() * 1500 + 2000;
		}else{
			this.momEyeInterval = 200;
		}
	}
	//save  restore 使动画仅作于此域
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var momTailCount = this.momTailCount;	
	ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5);
	var momBodyCount = this.momBodyCount;
	if (data.double == 1) {
		ctx1.drawImage(momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height * 0.5);
	}else{
		ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5);
	}
	var momEyeCount = this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);	
	ctx1.restore();
}