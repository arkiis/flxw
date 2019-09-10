import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../UI/Forms/Button/Button";
import * as Styles from "./Tables.styles";
import BTC from "../../../node_modules/cryptocurrency-icons/svg/color/btc.svg";

const TableContainer = styled.div`
  z-index: 10;
  width: 100%;
  display: flex;
  max-width: 1180px;
`;

class Table extends Component {
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

  renderTableData() {
    return this.state.coins.map((coin, index) => {
      const { id, symbol, name, price, change, icon } = coin;

      console.log(change.charAt(0));

      return (
        <Styles.TableRowStyles key={id}>
          <Styles.TabelDataStyles>{id}</Styles.TabelDataStyles>
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
          <Button padding width noMargin>
            Buy
          </Button>
        </Styles.TableRowStyles>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(this.state.coins[0]);

    console.log(header);
    return header.map((key, index) => {
      return (
        <Styles.TabelHeadingStyles key={index} bg>
          {key.toUpperCase()}
        </Styles.TabelHeadingStyles>
      );
    });
  }

  render() {
    return (
      <TableContainer>
        <Styles.Tablestyles>
          <tbody>
            <Styles.TableRowStyles bg>
              {this.renderTableHeader()}
            </Styles.TableRowStyles>
            {this.renderTableData()}
          </tbody>
        </Styles.Tablestyles>
      </TableContainer>
    );
  }
}

export default Table;
