exports.average = function(a){
    var r = {mean: 0, variance: 0, deviation: 0}, t = a.length;
    for(var m, s = 0, l = t; l--; s += a[l]);
    for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
    return r.deviation = Math.sqrt(r.variance = s / t), r;
}

exports.getMaxMin = function(a){
	var max,min
	for(i=0;i<a.length;i++){
		if (max === undefined){
			max = a[i]
		}

		if (min === undefined){
			min = a[i]
		}
		if (a[i] > max){
			max = a[i]
		}
		if (a[i] < min){
			min = a[i]
		}
	}

	return {
		max : max,
		min : min
	}
}