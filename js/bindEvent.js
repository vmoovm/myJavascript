// 绑定事件
function addEvent(obj, ev, fn) {
	var fnName = getFuncName(fn) || Math.random() + '' + Math.random(); //如果函数名不存在的话 则取两次随机数(避免重复) 作为函数存入的key值
	var func = function() { //将函数专为匿名函数并改变this指向 低版本ie下的必然操作 标准下如此操作没有副作用
		fn.apply(obj, arguments);
	}
	obj.funByEv = obj.funByEv || {}
	obj.funByEv[ev] = obj.funByEv[ev] || [];
	var _json = {}; //新建的json  
	_json[fnName] = func; //key:传进来的函数的名字  value:传进来的函数转变的匿名函数
	obj.funByEv[ev].push(_json); //将json push到数组里
	if(obj.addEventListener) {
		obj.addEventListener(ev, func, false);
	} else {
		obj.attachEvent('on' + ev, func);
	}
}
// 移除事件
function removeEvent(obj, ev, fn) {
	var fnName = getFuncName(fn); //函数名   getFuncName()内部处理 如果传匿名函数或没有传函数 则返回null 否则返回函数名
	var iBtn = false; //用来结束数组循环查找的开关
	var len = obj.funByEv[ev].length;
	if(fn && fnName) { //如果传进来数组 且数组有名字  则走if语句
		　　
		for(var i = 0; i < len; i++) { //循环  解除绑定对象的属性下对应事件的数组
			for(var j in obj.funByEv[ev][i]) { //在数组每项中 用json的key与解除的函数匹配
				if(j == fnName) { //匹配成功 则删除对应的函数
					obj.removeEventListener ? obj.removeEventListener(ev, obj.funByEv

						[ev][i][fnName], false) : obj.dettachEvent('on' + ev, obj.funByEv[ev][i][fnName]);
					iBtn = true; //删除后 则可以结束循环
				}
			}
			if(iBtn) break; //非常重要  同一个函数绑定给同个对象多次,这里认为解除哪个都一样(也许是有区别的, ) 所以解除掉一个后, 就退出数组循环　　
		}
	} else { //如果没有传函数,或者传入的是匿名函数  对不起 干掉所有绑定的
		for(var i = 0; i < len; i++) { //同if操作.只是不用去匹配  json的key和需要解除的函数的名字
			for(var k in obj.funByEv[ev][i]) { //原因? 干掉每一个当然不用去匹配了
				obj.removeEventListener ? obj.removeEventListener

				(ev, obj.funByEv[ev][i][k], false): obj.detachEvent('on' + ev, obj.funByEv[ev][i][k]);
			}
		}
	}
}

function getFuncName(fn) {
	if(!fn) return null; //如果没有传函数名,则返回空
	var reg = /\bfunction\s+([^(]+)/; //正则匹配函数名
	var result = fn.toString().match(reg); //通过正则表达式在函数转的字符串中得到数组
	return result ? result[1] : null; //取出第一个子项的结果 即为函数名 若没有找到
}