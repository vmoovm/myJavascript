var delStr=function(value,delStr){
		if(!value) return ''
		return value.split(delStr).join('');
	}
/*
 * 参数说明：
 * value:被操作的字符串
 * delStr:要删除的字符串
 * 调用：
 * var dstr='aaaahelloadfef'
 * delStr(dstr,'hello')
 * 结果：aaaaadfef
 * 
 * */