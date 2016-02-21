var aux = require('./aux');
var http = require('http');


http.createServer(function(request,response){
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            if (body.length > 2e6)
                request.connection.destroy();
        });

        request.on('end', function () {
        	body = JSON.parse(body)
        	var mergedData = merge.apply(this,body.mergeWith);
            response.end(JSON.stringify(apply(body.realData,mergedData)));
        });
    }else{
		response.end('manda um post viado ! ');
    }
}).listen(8002)





// var mergedWeatherRain = merge(weather,rain);

// console.log(apply(iceCreamSells,mergedWeatherRain))




function apply(realData,anotherData){
	var maxMin = aux.getMaxMin(realData);
	return anotherData.map(function(item){
		return item*maxMin.max
	})
}

function merge(){
	var normalized = [];
	[].forEach.call(arguments,function(a){
		var maxMin = aux.getMaxMin(a);
		a = a.map(function(i){
			return i/maxMin.max
		})
		normalized.push(a);
	})

	var merged = [];
	normalized[0].forEach(function(item,index){
		var currentIndex = []
		normalized.forEach(function(arr){
			currentIndex.push(arr[index]);
		})
		merged.push(aux.average(currentIndex).mean)
		currentIndex = [];
	})
	return merged;
}

