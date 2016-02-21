var chart = require('chart');
var clear = require('clear');
var clone = require('./clone');
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

            response.end(JSON.stringify(generatePrediction(body.data,body.window || 10)));


        });
    }else{
		response.end('body');
    }

}).listen(8001)





generatePrediction = function(graph,repetition_window){




	var maxMin = aux.getMaxMin(graph);

	min = maxMin.min;

	max = initialMax = maxMin.max;

	graph = graph.map(function(item){
		return (item/(max));
	})



	pre = graph.clone().map(function(item,i){
		return (graph[i]) + graph[graph.length-1]
	})

	graph.push(0)
	graph.push(0)

	graph = graph.concat(pre)

	var maxMin = aux.getMaxMin(graph);

	min = maxMin.min;

	max = maxMin.max;

	graph = graph.map(function(item){
		return (item/(max))*initialMax;
	})

	console.log(chart(graph, { width: 180, height: 20 }));

	return graph;

}















	// var newGraph = []
	// var tendence = []


	// var clone = graph.clone()

	// while(clone.length >= 7){

	// 	var portion = clone.splice(0, 7);

	// 	newGraph.push({
	// 		data : portion,
	// 		metrics : aux.average(portion)
	// 	});
	// }

