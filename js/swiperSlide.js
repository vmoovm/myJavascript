/* swiperSlide 滑动组件
 * 使用介绍：
 * 传一id  格式 #id
 * 请将以下classname注入到html中，具体请参考本实例
 * zswiperSlider-js
 * zswiperHandle-js
 * zoptions-js
 * zoption-js
 * 作者： 张中乐
 * 依赖关系：本组件-依赖-> onEvent.js;  但 onEvent.js -依赖-> bindEvent.js
 * 
 * update: 2017-12-01
 * */
function swiperSlide (elId) {
	//长按进入编辑状态
	var timeLong = [];
	var clear = null;
	var isHold = null;
	var mw = 0;
	var self={//各种坐标
		startX:null,
		startY:null,
		endX:null,
		endY:null,
		moveX:null,
		moveY:null
	};
	// 使每个zswiper-js归位
	function homing () {
		var doms = document.querySelector(elId).querySelectorAll('.zswiperHandle-js')
		for (var i = 0; i < doms.length; i++) {
			// doms[i].style.transform = 'translateX(0px)';
			setTransform(doms[i], self.endX)
		}
	}
	// 获得最大滑动长度并返回长度
	function getMoveWidth (ele) {
		var domP=ele.querySelector('.zswiperOptions-js').querySelectorAll('.zswiperOption-js');
		var w = 0;
		if (domP.length > 1) {
			for (var i = 0; i < domP.length; i++) {
				w += domP[i].scrollWidth;
			}
		} else {
			w = domP[0].scrollWidth;
		}
		return w;
		
	}
	// 调translateX兼容
	var setTransform = function(obj, leftWidth) {
		leftWidth = leftWidth || 0;
		var style = 'translateX(' + leftWidth + 'px)'
		obj.style.webkitTransform = style;
		obj.style.transform = style;
	};
	var start = function (obj) {
		var ev = obj.e;
		self={//重新初始化
			endX:null,
			endY:null,
			moveX:null,
			moveY:null,
			startX:null,
			startY:null
		};
		self.startX=ev.touches[0].pageX;
		self.startY=ev.touches[0].pageY;
		timeLong =  new Date() * 1;
		if (clear) {
			clearTimeout(clear);
		}
		// 归位
		homing();
	}
	
	var move = function (obj) {
		var ev = obj.e;
		obj.e.preventDefault();
	    //手移坐标
		self.moveX=ev.touches[0].pageX;
		self.moveY=ev.touches[0].pageY;
		//偏移量
		self.endX=self.moveX-self.startX;
		self.endY=self.moveY-self.startY;
		if(Math.abs(self.moveX) > 2 || Math.abs(self.moveY) > 2 ){
			clearTimeout(clear);
    		timeLong = 0;
		}
		mw = getMoveWidth (obj.self);
		if (self.endX > 0) {
			homing();
		} else {
			if (Math.abs(self.endX) >= mw) {
				self.endX = -mw
			}	
			obj.self.querySelector('.zswiperHandle-js').classList.remove('ztransition');
			setTransform(obj.self.querySelector('.zswiperHandle-js'), self.endX);
		}
		
	}
	
	var end = function (obj) {
		console.log(self.endX)
		if (self.endX > 0) {
			homing();
		} else {
			if (Math.abs(self.endX) > mw * 0.3) {
				self.endX = -mw
				setTransform(obj.self.querySelector('.zswiperHandle-js'), self.endX);
				obj.self.querySelector('.zswiperHandle-js').classList.add('ztransition');
			} else {
				homing();
			}	
		}
		mw = 0;
    	timeLong = 0;
    	rebind ();
	}
	
	//长按进入编辑状态
    var startN = new On(elId, 'touchstart', '.zswiperSlider-js', start);
	var moveN = new On(elId, 'touchmove', '.zswiperSlider-js', move);
	var endN = new On(elId, 'touchend', '.zswiperSlider-js', end);
	
	function rebind () {
		startN.removeEvt();
		moveN.removeEvt();
		endN.removeEvt();
		startN.addEvt();
		moveN.addEvt();
		endN.addEvt();
	}
}