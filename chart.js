var data = [1, 1, 2, 3, 5, 8, 13];
var body = d3.select("body");
var x    = d3.scale.linear()
			.domain([0, d3.max(data)])
			.range([0, 420]);

d3.select(".chart")
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.style("width", function(d)
	{
		return x(d) + "px";
	})
	.text(function(d) { return d});