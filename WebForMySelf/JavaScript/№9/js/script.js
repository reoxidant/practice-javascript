
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
	
	var result = Math.abs(-10);
	var result = Math.acos(-1);
	var result = Math.atan(45);
	
	var result = Math.ceil(-3.7);
	var result = Math.cos(60*0.01745);//2p/360
	
	var result = Math.E;//2p/360
	
	var result = Math.exp(2);//2p/360
	
	var result = Math.floor(-3.9);//2p/360
	
	var result = Math.LN10;//2p/360
	var result = Math.LN2;
	
	var result = Math.log(10);
	
	var result = Math.LOG10E;
	var result = Math.LOG2E;
	
	var result = Math.max(10,34,56,100,0,45,600,1000,5001,Infinity);
	var result = Math.min(10,34,56,100,0,45,600,1000,5001,-Infinity,-78);
	
	var result = Math.PI;
	
	var result = Math.pow(-4,0.5);
	
	var result = Math.floor(Math.random()*100);//0.0 1.0
	
	var result = Math.sin(30 * ((2*Math.PI)/360));
	
	var result = Math.sqrt(25);
	
	var result = Math.SQRT1_2;//1/sqrt(2)
	var result = Math.SQRT2;//sqrt(2)
	
	var result = Math.tan(45 * ((2*Math.PI)/360));//sqrt(2)
	
	var result = NaN;
	
	result = isNaN(result);
	
	var result = Number(true);
	
	var result = Number.MAX_VALUE;
	var result = Number.MIN_VALUE;
	
	var result = Number.NEGATIVE_INFINITY;
	var result = Number.POSITIVE_INFINITY;
	
	var nemb = 10.5;
	
	//var result = nemb.toString();
	//var result = nemb.toLocaleString();
	var result = nemb.toFixed(10);
	
	var result = nemb.toPrecision(10);
	
	
	
	
	//var result = parseFloat(' 10.23hello 10 world');
	var result = parseInt('10.23hello 10 world');
	
	
	
	
	
	
	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
}

