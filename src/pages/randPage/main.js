import * as d3 from 'd3'
import {data} from './data'
class CirclePacking {
  constructor(props) {
      this.el = props;
      this._run();
  }

  _run() {
      this.Scafold();
      this.Scale();
      this.Draw();
  }

  Scafold() {
      this.diameter = 800;
      this.margin = 20;
      this.view = null;
      this.svg = d3
          .select(this.el)
          .append("svg")
          .attr("x", this.margin + 100)
          .attr("width", this.diameter)
          .attr("height", "800")
          .append("g")
          .attr(
              "transform",
              "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")"
          );
  }

  Scale() {
      this.color = d3
          .scaleLinear()
          .domain([-1, 5])
          .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
          .interpolate(d3.interpolateHcl);
      this.pack = d3
          .pack()
          .size([this.diameter - this.margin, this.diameter - this.margin])
          .padding(2);
  }

  Draw() {
      // provisoning
      this.root = d3
          .hierarchy(data)
          .sum((d) => d.size)
          .sort((a, b) => b.value - a.value);

      console.log(this.root);

      this.focus = this.root;
      this.nodes = this.pack(this.root).descendants();

      this.circle = this.svg
          .selectAll("circle")
          .data(this.nodes)
          .enter()
          .append("circle")
          .attr("class", (d) =>
              d.parent
                  ? d.children
                      ? "node"
                      : "node node--leaf"
                  : "node node--root"
          )
          .style("fill", (d) => (d.children ? this.color(d.depth) : null))
          .on("click", (d) => {
              if (this.focus !== d) {
                  this._zoom(d);
                  d3.event.stopPropagation();
              }
          });

      this.text = this.svg
          .selectAll("text")
          .data(this.nodes)
          .enter()
          .append("text")
          .attr("class", "label")
          .style("display", (d) =>
              d.parent === this.root ? "none" : "block"
          )
          .style("fill-opacity", (d) =>
              d === this.root || d.parent === this.root ? 0 : 1
          )
          .text((d) => d.data.name);

      this.node = this.svg.selectAll("circle,text");
      this._zoomTo([this.root.x, this.root.y, this.root.r * 2 + this.margin]);
      this.svg.on("click", () => this._zoom(this.root));
  }

  _zoom(d) {
      this.focus = d;
      let _this = this;
      var transition = d3
          .transition()
          .duration(750)
          .tween("zoom", (d) => {
              var i = d3.interpolateZoom(this.view, [
                  this.focus.x,
                  this.focus.y,
                  this.focus.r * 2 + this.margin,
              ]);
              return (t) => this._zoomTo(i(t));
          });

      transition
          .selectAll("text")
          .filter(function (d) {
              return (
                  d.parent === _this.focus || this.style.display === "inline"
              );
          })
          .style("fill-opacity", function (d) {
              return d.parent === _this.focus ? 1 : 0;
          })
          .on("start", function (d) {
              if (d.parent === _this.focus) this.style.display = "inline";
          })
          .on("end", function (d) {
              if (d.parent !== _this.focus) this.style.display = "none";
          });
  }
  _zoomTo(varies) {
      var k = this.diameter / varies[2];
      this.view = varies;
      this.node.attr(
          "transform",
          (d) =>
              "translate(" +
              (d.x - varies[0]) * k +
              "," +
              (d.y - varies[1]) * k +
              ")"
      );
      this.circle.attr("r", (d) => d.r * k);
  }
}

export default CirclePacking
