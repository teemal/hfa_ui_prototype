// var data = [30, 86, 168, 281, 303, 365];

// d3.select(".example_graph")
//   .selectAll("div")
//   .data(data)
//   .enter()
//   .append("div")
//   .style("width", function(d) {
//     return d + "px";
//   })
//   .text(function(d) {
//     return d;
//   },
// //   console.log("FUCK fuck FUCK")
//   );

var svgWidth = 500;  
var svgHeight = 300;

var svg = d3.select('svg')  
    .attr("width", svgWidth)  
    .attr("height", svgHeight)  
    .attr("class", "bar-chart");


// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset = d3.json("fake_data.json", function(data) {
    console.log(data);
});

var barPadding = 5;
var barWidth = svgWidth / dataset.length;

var barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - d;
  })
  .attr("height", function(d) {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function(d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });
