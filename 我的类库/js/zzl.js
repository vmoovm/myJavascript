(function (win) {
	// 获取目标元素类型方法
    function _getType (target) {
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
	var zzl = function (selector) {
		var dom = null;
		var domType = _getType(selector);
		switch(domType) {
			case 'className':
				dom = document.querySelectorAll(selector)
				break;
			case 'id':
				dom = document.querySelector(selector)
				break;
			case 'tagName':
				dom = document.getElementsByTagName(selector)
				break;
			default:
				console.log(selector +'有误');
				return false;
		}
		return {
			dm: dom,
			cs: function () {
				if (arguments.length <= 0) {
					return
				}
				if (domType == 'id' ) {
					switch (arguments.length) {
						case 1 :
							if (arguments[0].indexOf(';')) {
								this.dm.style.cssText = arguments[0]
							}
							break;
						case 2 :
							this.dm.style[arguments[0]] = arguments[1]
							break;
						default:
							return
					}
				} else {
					for (var i = 0; i < this.dm.length; i++) {
						switch (arguments.length) {
							case 1 :
								if (arguments[0].indexOf(';')) {
									this.dm[i].style.cssText = arguments[0]
								}
								break;
							case 2 :
								this.dm[i].style[arguments[0]] = arguments[1]
								break;
							default:
								return
						}
					}
				}
			},
			preSAll:function (hasSelf) {
				if (domType == 'id' ) {
					if (this.dm.nodeName ) {
						//如果是class或者当前元素为无属性标签，为记录当前位置
						var curSite = new Date()*1
						this.dm.setAttribute('curSite',curSite);
					} else if (/^\./g.test(this.dm)) {
						//如果是class或者当前元素为无属性标签，为记录当前位置
						var curSite = new Date()*1;
						if (document.querySelector(this.dm)) {
							document.querySelector(this.dm).setAttribute('curSite',curSite);
						} else {
							return [];
						}
					} else if (/^\#/g.test(this.dm)) {
						if (!document.querySelector(this.dm)) return [];
					} else if (this.dm && document.querySelector(this.dm)) {
						var curSite = new Date()*1;
						if (document.querySelector(this.dm)) {
							document.querySelector(this.dm).setAttribute('curSite',curSite);
						} else {
							return [];
						}
					} else {
						return false;
					}
					
					if ( this.dm.nodeName ) {
						var eleAll = this.dm.parentElement.children;
					} else {
						var eleAll = document.querySelector(this.dm).parentElement.children;
					}
					
					var eleArray = new Array();
					var afterArray = new Array();
					var eleIndex = 0;
					for (var i = 0; i < eleAll.length; i ++) {
						eleArray.push(eleAll[i]);
						if (this.dm.nodeName) {
							if (eleAll[i].getAttribute('curSite') == curSite) {
								eleIndex = i - 1;
								if (i >= 0) eleAll[i].removeAttribute('curSite');
							}
						} else if (/^\./g.test(this.dm)) {
							if (eleAll[i].className == this.dm.replace(/^\./g, '') && eleAll[i].getAttribute('curSite') == curSite) {
								eleIndex = i - 1;
								eleAll[i].removeAttribute('curSite');
							}
						} else if (/^\#/g.test(this.dm)) {
							if (eleAll[i].getAttribute('id') == this.dm.replace(/^\#/g, '')) eleIndex = i - 1;
						}
					}
					// 是否包含自己
					if (typeof hasSelf =='boolean' && hasSelf) {
						//包含自己时，若等于总长度时，只返回自己
						eleIndex=eleIndex + 1;
						if (eleIndex == eleArray.length) return el;
					} else {
						//不包含自己时，若等于总长度-1时，没有兄弟元素
						if(eleIndex == eleArray.length) return [];
					}
					//整理出要返回的元素
					for ( var n = eleIndex; n >= 0; n --) {
						afterArray.push(eleArray[n]);
					}
					return afterArray
				} else {
					if (ele.nodeName ) {
						//如果是class或者当前元素为无属性标签，为记录当前位置
						var curSite = new Date()*1
						ele.setAttribute('curSite',curSite);
					} else if (/^\./g.test(ele)) {
						//如果是class或者当前元素为无属性标签，为记录当前位置
						var curSite = new Date()*1;
						if (document.querySelector(ele)) {
							document.querySelector(ele).setAttribute('curSite',curSite);
						} else {
							return [];
						}
					} else if (/^\#/g.test(ele)) {
						if (!document.querySelector(ele)) return [];
					} else if (ele && document.querySelector(ele)) {
						var curSite = new Date()*1;
						if (document.querySelector(ele)) {
							document.querySelector(ele).setAttribute('curSite',curSite);
						} else {
							return [];
						}
					} else {
						return false;
					}
					
					if ( ele.nodeName ) {
						var eleAll = ele.parentElement.children;
					} else {
						var eleAll = document.querySelector(ele).parentElement.children;
					}
					
					var eleArray = new Array();
					var afterArray = new Array();
					var eleIndex = 0;
					for (var i = 0; i < eleAll.length; i ++) {
						eleArray.push(eleAll[i]);
						if (ele.nodeName) {
							if (eleAll[i].getAttribute('curSite') == curSite) {
								eleIndex = i - 1;
								if (i >= 0) eleAll[i].removeAttribute('curSite');
							}
						} else if (/^\./g.test(ele)) {
							if (eleAll[i].className == ele.replace(/^\./g, '') && eleAll[i].getAttribute('curSite') == curSite) {
								eleIndex = i - 1;
								eleAll[i].removeAttribute('curSite');
							}
						} else if (/^\#/g.test(ele)) {
							if (eleAll[i].getAttribute('id') == ele.replace(/^\#/g, '')) eleIndex = i - 1;
						}
					}
					// 是否包含自己
					if (typeof hasSelf =='boolean' && hasSelf) {
						//包含自己时，若等于总长度时，只返回自己
						eleIndex=eleIndex + 1;
						if (eleIndex == eleArray.length) return el;
					} else {
						//不包含自己时，若等于总长度-1时，没有兄弟元素
						if(eleIndex == eleArray.length) return [];
					}
					//整理出要返回的元素
					for ( var n = eleIndex; n >= 0; n --) {
						afterArray.push(eleArray[n]);
					}
					return afterArray
				}
			}	
		}
	}
	//
	win.z = zzl;
})(window)
