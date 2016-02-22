var aux = require('./aux');
var http = require('http');


http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            if (body.length > 2e6)
                request.connection.destroy();
        });

        request.on('end', function () {
        	body = JSON.parse(body);
            var mergeItens = body.mergeWith;
            mergeItens.push(body.realData);
            var mergedData = merge.apply(this, mergeItens);
            response.end(JSON.stringify(apply(body.realData,mergedData)));
        });
    }else{
		response.end('manda um post viado ! ');
    }
}).listen(8002)


function apply(realData,anotherData) {
	var maxMin = aux.getMaxMin(realData);
	var maped = anotherData.map(function(item){
		return item*maxMin.max
	});

    var finalData = [];
    realData.forEach(function(item, index){
        if(maped[index]) {
            finalData.push(maped[index]);
        } else {
            finalData.push(item);
        }
    });

    return finalData;
}

function merge() {

    var maxLength = 0;
    var maxLengthIndex = 0;
	var normalized = [];
	[].forEach.call(arguments,function(a,index){
		if(a.length > maxLength) {
            maxLength = a.length;
            maxLengthIndex = index;     
        }

        var maxMin = aux.getMaxMin(a);
		a = a.map(function(i){
			return i/maxMin.max
		})
		normalized.push(a);
	})

	var merged = [];
	normalized[maxLengthIndex].forEach(function(item,index){
		var currentIndex = []
		normalized.forEach(function(arr){
			if(arr[index]) {
                currentIndex.push(arr[index]);
            }
		})
		merged.push(aux.average(currentIndex).mean)
		currentIndex = [];
	})
	return merged;
}

