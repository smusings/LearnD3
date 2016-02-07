var parent = this;
var map  = {"burger": 
				{ "sold":1000,
					"amount":200000,
					"details" : 
					{
						"bacon burger":{
							"sold":500,
							"amount":100000 },
						"cheese burger":{
							"sold":500,
							"amount":100000}
					}
				},
			"fries": 
				{ "sold":500,
					"amount":100000,
					"details" : 
					{
						"bacon fries":{
							"sold":350,
							"amount":50000 },
						"cheese fries":{
							"sold":150,
							"amount":50000}
					}
				},
			"shakes": 
				{ "sold":300,
					"amount":10000,
					"details" : 
					{
						"vanilla":{
							"sold":250,
							"amount":5000 },
						"chocolate":{
							"sold":50,
							"amount":5000}
					}
				}
			};


function drawGraph(key) {
	var data = [];
	var range = []

	for (var i in map) {
  		if (map.hasOwnProperty(i)) {
  			data_map = { 'name': i, 'value': map[i][key]}
			data.push(data_map);
			range.push(map[i][key]);
		}
 	}

	var x = d3.scale.linear()
		.domain([0, d3.max(range)])
		.range([0, 420]);

	d3.select(".chart").selectAll("div").remove() 
	
	d3.select(".header").text(key)

	d3.select(".chart")
		.selectAll("div")
		.data(data)
		.enter().append("div")
		.style("width", function(d)
		{
			var y = d.value;
			return x(y) + "px";
		})
		.text(function(d) {
			return d.name + " - " + d.value;
		})
		.on('click', function(d){
			console.log(d.name)
			map = map[d.name]

			if (map != null && map["details"] != null)
			{
				parent.map = map["details"]
				drawGraph("sold");
			}
		});
}

drawGraph("sold");