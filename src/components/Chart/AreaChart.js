import React from "react";
import ReactApexChart from "react-apexcharts";
import CHART_DATA from "./AreaChartData";
import "./Chart.css";

//this chart can be found on the PriceDetails component

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: CHART_DATA,
      chartDataSelection: CHART_DATA.selection,
      chartDataOptions: CHART_DATA.selection.options
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
    console.log(CHART_DATA.options.xaxis.min);
    this.setState({
      chartDataSelection: timeline
    });

    switch (timeline) {
      case "one_month":
        CHART_DATA.options.xaxis.min = new Date("28 Jan 2013").getTime();

        break;
      case "six_months":
        this.setState({
          chartDataOptions: {
            xaxis: {
              min: new Date("27 Sep 2012").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "one_year":
        this.setState({
          chartDataOptions: {
            xaxis: {
              min: new Date("27 Feb 2012").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "ytd":
        this.setState({
          chartDataOptions: {
            xaxis: {
              min: new Date("01 Jan 2013").getTime(),
              max: new Date("27 Feb 2013").getTime()
            }
          }
        });
        break;
      case "all":
        this.setState({
          chartDataOptions: {
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
    let cool = { ...CHART_DATA };
    //These are the differnet time intervals for the area chart

    return (
      <div id="chart">
        <div className="toolbar chartToolBar">
          <div>
            <span
              onClick={() => this.updateData("one_month")}
              id="one_month"
              className={
                this.state.chartDataSelection === "one_month"
                  ? "active"
                  : "not-active"
              }
            >
              1M
            </span>
            <span
              onClick={() => this.updateData("six_months")}
              id="six_months"
              className={
                this.state.chartDataSelection === "six_months"
                  ? "active"
                  : "not-active"
              }
            >
              6M
            </span>
            <span
              onClick={() => this.updateData("one_year")}
              id="one_year"
              className={
                this.state.chartDataSelection === "one_year"
                  ? "active"
                  : "not-active"
              }
            >
              1Y
            </span>
            <span
              onClick={() => this.updateData("ytd")}
              id="ytd"
              className={
                this.state.chartDataSelection === "ytd"
                  ? "active"
                  : "not-active"
              }
            >
              YTD
            </span>
            <span
              onClick={() => this.updateData("all")}
              id="all"
              className={
                this.state.chartDataSelection === "all"
                  ? "active"
                  : "not-active"
              }
            >
              ALL
            </span>
          </div>
          <div className="areaChartHeader">
            <p className="areaChartPrice">
              ${this.props.simplifyPrice(this.props.price.price)}
            </p>
            <p
              className="areaChartPercent"
              style={
                this.props.price["1d"] &&
                this.props.price["1d"].price_change_pct.charAt(0) === "-"
                  ? { color: "#ff2734" }
                  : { color: "#23cc9a" }
              }
            >
              {this.props.price["1d"] &&
                this.props.price["1d"].price_change_pct}
              %
            </p>
          </div>
        </div>

        {/* the area chart */}
        <ReactApexChart
          options={this.state.chartData.options}
          series={this.state.chartData.series}
          type="area"
          height="350"
        />
      </div>
    );
  }
}

export default AreaChart;
