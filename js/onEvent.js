		
		
/**
 * 委托事件绑定方法
 * @params parent 委托父元素的css选择符 tag id class
 * @params eventsName 绑定的事件
 * @params child 绑定事件的元素css选择符 tag id class
 * @params callback 事件响应函数
 * @params flag 是解绑还是绑定  false 为绑定   true 为解绑
 * 
 * 依赖关系：必须保证它的存在bindEvent.js
 * update: 2017.11.6
 * 
 */
function On (parent, eventsName, child, callback) {
    var parentNodes = document.querySelectorAll(parent);
    var len = parentNodes.length;
    var targetType = getType(child);
    var curSite = null;	//记录当前对象
    if (len === 0) {
        return;
    }

    function bindfn (event) {
		var obj = getNode(event.target);
    	for(var c = 0; c < cd.length; c++){
    		if (cd[c].getAttribute('curSite') === curSite) {
    			obj.index = c;
    			cd[c].removeAttribute('curSite');
    		}
    	}
        if (obj instanceof Object) {
        	obj.e = event;
        	callback(obj);
        }
    }
   
    var cd = null;
    
    this.addEvt = function () {
		for (var i = 0; i < len; i++) {
	    	cd = parentNodes[i].querySelectorAll(child)
	        addEvent(parentNodes[i], eventsName, bindfn)
	    }    	
    }
    this.addEvt();
    this.removeEvt = function () {
    	for (var i = 0; i < len; i++) {
    		removeEvent(parentNodes[i], eventsName, bindfn);
    	}
    }
    
    // 获取目标元素类型方法
    function getType(target) {
        var type;
        if (target.indexOf(".") !== -1) {
            type = "className";
        } else if (target.indexOf("#") !== -1) {
            type = "id";
        } else {
            type = "tagName";
        }
        return type;
    }
    // 某元素中是否包含该class
    function hasClass (elem, cls) {
	  cls = cls || '';
	  cls = cls.toLowerCase().replace(/./, '');
	  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
	  return new RegExp(' ' + cls + ' ',"gm").test(' ' + elem.className.toLowerCase() + ' ');
	}
	var getNode = function (node) {
        var obj = {
        	self: node,
        	flag: false
        }
        if (targetType === "className") {
            if (hasClass(node, child.toLowerCase())) {
	            obj.flag = true;
	            curSite = 'cur' + new Date()*1
				node.setAttribute('curSite',curSite);
	            return obj;
	        } else if (node.nodeName === 'BODY' || node.nodeName === 'HTML'){
	            return false
	        } else {
	        	return getNode(node.parentNode);
	        }
        } else if (targetType === "id") {
            if (node.id.toLowerCase() === child.toLowerCase()) {
	            obj.flag = true;
	            curSite = 'cur' + new Date()*1
				node.setAttribute('curSite',curSite);
	            return obj
	        } else if (node.nodeName === 'BODY' || node.nodeName === 'HTML'){
	            return false
	        } else {
	        	return getNode(node.parentNode);
	        }
        } else {
            if (node.nodeName.toLowerCase() === child.toLowerCase()) {
	            obj.flag = true;
	            curSite = 'cur' + new Date()*1
				node.setAttribute('curSite',curSite);
	            return obj
	        } else if (node.nodeName === 'BODY' || node.nodeName === 'HTML'){
	            return false
	        } else {
	        	return getNode(node.parentNode);
	        }
        }
    }
}