
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
	//Math.abs();
	//Math.acos();
	//Math.atan();
	//Math.ceil();
	//Math.cos();
	//Math.E;
	//Math.exp();
	//Math.floor();
	//Math.LN10;
	//Math.LN2;
	//Math.log(10);
	//Math.LOG10E;
	//Math.LOG2E;
	//Math.max();
	//Math.min();
	//Math.PI;
	//Math.pow();
	//Math.random();
	//Math.sin();
	//Math.sqrt();
	//Math.SQRT1_2;
	//Math.SQRT2;
	//Math.tan();
	//NaN;
	//isNaN(NaN);
	//Number();
	//Number.MAX_VALUE;
	//Number.MIN_VALUE;
	//Number.NEGATIVE_INFINITY;
	//Number.POSITIVE_INFINITY;
	//toString();
	//toLocaleString();
	//toFixed();
	//toPrecision();
	//parseFloat();
	//parseInt

	var result = Math.abs(-10);//10
	var result = Math.acos(-0.5);//2.09
	var result = Math.atan(60);//1.55
	var result = Math.ceil(9.23);//10
	var result = Math.cos(90);//-0.44
	var result = Math.E;//2.71
	var result = Math.exp(3);//20
	var result = Math.floor(-3.5);//-4
	var result = Math.LN10;//0.43
	var result = Math.LN2;//0.69
	var result = Math.log(20);//3
	var result = Math.LOG10E;//0.43
	var result = Math.LOG2E;//1.44
	var result = Math.max(10,5,2);//10
	var result = Math.min(0,-10,-Infinity);//-Infinity
	var result = Math.PI;//3.14
	var result = Math.pow(3,5);//243
	var result = Math.ceil(Math.random()*200);//random
	var result = Math.sin(45);//0.85
	var result = Math.sqrt(16);//4
	var result = Math.SQRT1_2;//1/sqrt(2) = 0.7
	var result = Math.SQRT2;//sqrt(2) = 1.4*/
	var result = Math.tan(90);//-2
	var result = NaN;//NaN
	var result = isNaN(12);//false
	var result = Number(true);//1
	var result = Number.MAX_VALUE;
	var result = Number.MIN_VALUE;
	var result = Number.NEGATIVE_INFINITY;//-Infinity
	var result = Number.POSITIVE_INFINITY;//Infinity
	var number = 820.65;
	var result = number.toString();//'820'
	var result = number.toLocaleString();//'820'
	var result = number.toFixed(5);//820.65000
	var result = number.toPrecision(3);//821
	var result = parseFloat('90.5px');//90.5
	var result = parseInt('105.50 hello world');//105

	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
}

