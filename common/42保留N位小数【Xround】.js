/*
 * x：小数
 * num:保留n位小数
 * 
 * 调用：xround(3.4555,3) 结果：3.456
 * xround(3.4555,3) 结果：3.456
 * 
 * */

function xround(x,num){
	if(x.toString().split('.')[1].length>num){//小数个数大于要求位数，思路：放大10的N次方取最小整数，再缩小10的N次方
		return Math.round(x*Math.pow(10,num))/Math.pow(10,num);
	}else{//小数个数小于等于要求位数
		var ab=x.toString();
		for(var i=0; i<Math.abs(x.toString().split('.')[1].length-num);i++){
			ab+="0";
		}
		return ab;
	}
}


