var svgWidth = 500;
var svgHeight = 300;

var svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "bar-chart");

// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
d3.json("fake_data.json", function(error, data) {
  data.forEach(function(d) {
    d.county = d.county;
    d.county.years = d.county.crook.year;
    console.log(d.county);
    console.log(d.county.years);
  });

  console.log("+++++++++++++++++++++++++++++++++");
  console.log(error);
  console.log(data);
  console.log(data.county);
  console.log(data.county.crook);
  console.log(data.county.crook.year[1999]);
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
});
