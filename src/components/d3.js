function d() {
var margin = {top: 40, right: 20, bottom: 30, left: 40},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
.rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
.range([height, 1]);

var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom");

var yAxis = d3.svg.axis()
.scale(y)
.orient("left");


var svg = d3.select("section").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


 d3.csv("http://localhost:3000/dummy/rentcar2021.csv", function(d) {
  x.domain(d.map(function(a) { return a.VHCLE_NM; }));
  y.domain([0, d3.max(d, function(a) { return a.USE_TIME_CO; })]);


  /* x축 */
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  /* y축 */
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "end")
      .text("이용 시간");

  svg.select("body").selectAll("div")
      .data(d)
      .enter().append("div")
      .attr("class", "bar")
      .attr("x", function(a) { return x(a.VHCLE_NM); })
      .attr("width", x.rangeBand())
      .attr("y", function(a) { return y(a.USE_TIME_CO); })
      .attr("height", function(a) { return height - y(a.USE_TIME_CO); })
});

function type(d) {
    d.USE_TIME_CO = +d.USE_TIME_CO;
    return d;
  }
};

export default d;