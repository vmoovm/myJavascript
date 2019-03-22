//返回一个数据的类型
Onenn_Hide.Constructor = function(dObject){
	try {
		if ( dObject == null ) return "null";
		if ( dObject.nodeName ) return "Element";
		dObject.constructor.toString().replace(/(^\s*function )(Number|String|Array|Boolean|Date|RegExp|Function)/g, 
			function(){
				switch (arguments[2]) {
					case "Number": Onenn_Hide.Result = window.Number; break;
					case "String": Onenn_Hide.Result = window.String; break;
					case "Array": Onenn_Hide.Result = window.Array; break;
					case "Boolean": Onenn_Hide.Result = window.Boolean; break;
					case "Date": Onenn_Hide.Result = window.Date; break;
					case "RegExp": Onenn_Hide.Result = window.RegExp; break;
					case "Function": Onenn_Hide.Result = window.Function; break;
					default: Onenn_Hide.Result = window.Function; break;
				}
			}
		);
		delete dObject.constructor;
		if ( Onenn_Hide.Result != null ) return Onenn_Hide.Result;
	} catch(aErr) {
	} finally {
		delete Onenn_Hide.Result;
	};
	return window.Object;