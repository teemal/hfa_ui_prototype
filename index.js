var data = [30, 86, 168, 281, 303, 365];

d3.select(".example_graph")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
//   .style("width", function(d) {
//     return d + "px";
//   })
.style(width = 500, height = 500)
  .text(function(d) {
    return d;
  },
//   console.log("FUCK fuck FUCK")
  );

