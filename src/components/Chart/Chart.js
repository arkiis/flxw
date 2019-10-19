import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./Chart.css";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: "hello",
      isFetching: false,
      selection: "one_year",
      options: {
        annotations: {
          yaxis: [
            {
              y: 0,
              tickAmount: 0,
              borderColor: "transparent",
              label: {
                borderColor: "red",

                show: false,
                showAlways: false,

                style: {
                  color: "#fff",
                  background: "#00E396"
                }
              },
              floating: true,
              axisTicks: {
                show: false
              },
              axisBorder: {
                show: false
              },
              labels: {
                show: false
              },
              crosshairs: {
                show: false
              }
            }
          ],
          xaxis: [
            {
              x: new Date("14 Nov 2012").getTime(),
              borderColor: "transparent",
              yAxisIndex: 0,
              label: {
                show: false,
                text: "",
                style: {
                  color: "#fff",
                  background: "#775DD0"
                }
              },
              axisTicks: {
                show: false
              }
            }
          ]
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: false
        },
        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Mar 2012").getTime(),
          tickAmount: 6
        },
        tooltip: {
          x: {
            format: "MMMM dd yyyy"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        colors: ["#6433ff", "#00E396", "#CED4DC"],
        stroke: {
          width: "2"
        },

        chart: {
          toolbar: {
            show: false,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            autoSelected: "zoom"
          }
        }
      },

      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54]
          ]
        }
      ]
    };
  }
  //This fetch is to grab the timestamps and the price at the given date.
  //this is to replace the data above but I'm still trying to figure that out
  fetchdata() {
    fetch(
      "https://api.nomics.com/v1/currencies/sparkline?key=ba5753b91002279e7338b58479c03ea5&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z"
    )
      .then(response => response.text())
      .then(coinData =>
        this.setState({
          coins: coinData,
          isFetching: true
        })
      );
  }

  componentDidMount() {
    this.fetchdata();
  }

  updateData(timeline) {
    this.setState({
      selection: timeline
    });

    switch (timeline) {
      case "one_month":
        this.setState({
          options: {
            xaxis: {
              min: new Date("28 Jan 2013").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "six_months":
        this.setState({
          options: {
            xaxis: {
              min: new Date("27 Sep 2012").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "one_year":
        this.setState({
          options: {
            xaxis: {
              min: new Date("27 Feb 2012").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "ytd":
        this.setState({
          options: {
            xaxis: {
              min: new Date("01 Jan 2013").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "all":
        this.setState({
          options: {
            xaxis: {
              min: undefined,
              max: undefined
            }
          }
        });
        break;
      default:
    }
  }

  render() {
    const timeStamp = this.state.coins;
    console.log(timeStamp);

    //These are the differnet time intervals for the area chart

    return (
      <div id="chart">
        <div className="toolbar">
          <span
            onClick={() => this.updateData("one_month")}
            id="one_month"
            className={
              this.state.selection === "one_month" ? "active" : "not-active"
            }
          >
            1M
          </span>
          <span
            onClick={() => this.updateData("six_months")}
            id="six_months"
            className={
              this.state.selection === "six_months" ? "active" : "not-active"
            }
          >
            6M
          </span>
          <span
            onClick={() => this.updateData("one_year")}
            id="one_year"
            className={
              this.state.selection === "one_year" ? "active" : "not-active"
            }
          >
            1Y
          </span>
          <span
            onClick={() => this.updateData("ytd")}
            id="ytd"
            className={this.state.selection === "ytd" ? "active" : "not-active"}
          >
            YTD
          </span>
          <span
            onClick={() => this.updateData("all")}
            id="all"
            className={this.state.selection === "all" ? "active" : "not-active"}
          >
            ALL
          </span>
        </div>
        {/* <div>
          {timeStamp.map(coin => {
            if (this.state.isFetching) {
              return <p>{coin}</p>;
            }
            return null;
          })}
        </div> */}

        {/* the area chart */}
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="350"
        />
      </div>
    );
  }
}

export default AreaChart;
