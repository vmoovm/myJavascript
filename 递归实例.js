// 方法一:

function sum(num){
	if(num<=1){
		return 1;
	}else{
		return num+sum(num-1);
	}
}
console.log(sum(5));//15



// 方法二：
function sum(num){
	if(num<=1){
		return 1;
	}else{
		return num+arguments.callee(num-1);
	}
}
console.log(sum(5));//15


// 解释: arguments.callee 调用自身,等价于sum