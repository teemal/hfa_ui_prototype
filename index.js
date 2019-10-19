const svg = d3.select("svg"),
  margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  x = d3
    .scaleBand()
    .rangeRound([0, width])
    .padding(0.2),
  y = d3.scaleLinear().rangeRound([height, 0]),
  g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("fake_data.json").then(data => {
  data = data;

  x.domain(data.map(d => d.county));
  y.domain([0, d3.max(data, d => d.year)]);

  g.append("g")
    .attr("class", "axis axis-x")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis axis-y")
    .call(d3.axisLeft(y).ticks(10));
});

g.selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", d => x(d.genre))
  .attr("y", d => y(d.count))
  .attr("width", x.bandwidth())
  .attr("height", d => height - y(d.count));
