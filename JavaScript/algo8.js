// arr.reduce((a, b) => a + b, 0);

const lengthy = function (para, param){

    let sumArr1 = para.reduce((a, b) => a + b, 0);
    let sumArr2 = param.reduce((a, b) => a + b, 0);
	if(sumArr1 > sumArr2){
		return para.length;
	}
	else if (sumArr1 < sumArr2){
		return param.length;
	}
	else return "Both have equal lengths of "+ para.length;
}



console.log(lengthy([3, 5, 1, 7, 9], [11, 31])); 
console.log(lengthy([13, 11, 3, 1], [4, 9, 1]));
console.log(lengthy([20], [1, 18]));