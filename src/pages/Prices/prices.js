import React, { Component, useState, useEffect } from "react";
import PriceList from "../../components/PriceList/PriceList.component";
import styled from "styled-components";
// import { fetchCrypto } from "../../store/actions/authActions";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
export const HomeMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const HomepageWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

const Prices = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=BTC,ETH,XRP,USDT,BCH,LTC,EOS&interval=1h,1d,7d,30d,365d`
    );

    const coins = await data.json();

    setCoins(coins);
    console.log(coins);
  };

  return (
    <HomeMainWrapper style={{ padding: "20px" }}>
      <HomepageWrapper>
        <PriceList coins={coins} />
      </HomepageWrapper>
    </HomeMainWrapper>
  );
};

export default Prices;

// class Prices extends Component {
//   componentDidMount() {
//     this.props.fetchCrypto();
//   }

//   render() {
//     console.log(this.props);
//     return <div>YO</div>;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     crypto: state.crypto
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchCrypto }, dispatch);
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Prices);
