var data = [30, 86, 168, 281, 303, 365];

d3.select(".example_graph")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("width", function(d) {
    return d + "px";
  })
  .text(function(d) {
    return d;
  });

  console.log("FUCK FUCK FUCK")
