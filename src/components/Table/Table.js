import React, { Component } from "react";
import styled from "styled-components";
import * as Styles from "./Tables.styles";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableContainer = styled.div`
  z-index: 10;
  width: 100%;
  display: flex;
  max-width: 1180px;
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;
//TABLE FOR HOMEPAGE--------------->
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Fake data
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
    this.headers = Object.keys(this.state.coins[0]);
  }

  render() {
    return (
      <TableContainer>
        <Styles.Tablestyles>
          <tbody>
            <Styles.TableRowStyles bg flexMobile spaceEvenly LastChildDel>
              <TableHeader headers={this.headers} />
              {/* this data is being mapped on the  
            tabel body*/}
            </Styles.TableRowStyles>
            {this.state.coins.map((coin, index) => {
              return <TableBody coin={coin} />;
            })}
          </tbody>
        </Styles.Tablestyles>
      </TableContainer>
    );
  }
}

export default Table;
