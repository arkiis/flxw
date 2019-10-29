import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../UI/Forms/Button/Button";
import * as Styles from "./Tables.styles";
import BTC from "../../../node_modules/cryptocurrency-icons/svg/color/btc.svg";

const TableContainer = styled.div`
  z-index: 10;
  width: 100%;
  display: none;
  max-width: 1180px;

  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

class MobileTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [
        {
          id: 1,
          name: {
            Identity: "BitCoin",
            symbol: "BTC"
          },
          price: "$1,000",
          change: "-3.00%",
          trade: ""
        },
        {
          id: 2,
          name: {
            Identity: "Etheruem",
            symbol: "ETH"
          },
          price: "$800",
          change: "+2.14%",
          trade: ""
        },
        {
          id: 3,
          name: {
            Identity: "LiteCoin",
            symbol: "LTC"
          },
          price: "$125",
          change: "+1.40%",
          trade: ""
        },
        {
          id: 4,

          name: {
            Identity: "Ripple",
            symbol: "XRP"
          },
          price: "$1.00",
          change: "+1.50%",
          trade: ""
        }
      ]
    };
  }

  //fetches the data to show on the table
  //on the price page

  fetchCrpto() {
    fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=BTC,ETH,XRP,BCH,LTC,EOS&interval=1d,30d"
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }

  renderTableData() {
    return this.state.coins.map((coin, index) => {
      const { id, symbol, name, price, change, icon } = coin;

      return (
        <Styles.MobileTableRowStyles key={id} bg>
          <Styles.TabelDataStyles>
            {name.icon}
            {name.Identity} {name.symbol}
          </Styles.TabelDataStyles>
          <Styles.TabelDataStyles>{price}</Styles.TabelDataStyles>
          <Styles.TabelDataStyles
            style={
              change.charAt(0) === "+"
                ? { color: "#23cc9a" }
                : { color: "#eb5d5e" }
            }
          >
            {change}
          </Styles.TabelDataStyles>
        </Styles.MobileTableRowStyles>
      );
    });
  }

  render() {
    return (
      <Styles.MobileTableContainer>
        <Styles.Tablestyles>
          <tbody>{this.renderTableData()}</tbody>
        </Styles.Tablestyles>
      </Styles.MobileTableContainer>
    );
  }
}

export default MobileTable;