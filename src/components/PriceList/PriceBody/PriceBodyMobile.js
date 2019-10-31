// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import * as Styles from "../../Table/Tables.styles";

// const MobileLink = styled(Link)`
//   display: flex;
//   justify-content: space-between;
//   flex: 1 1 auto;
//   width: 100%;
// `;

// const PriceBodyMobile = props => {
//   const lowercasedCoins = props.search.toLowerCase();

//   //filters the coins when the user types in the search bar

//   let filteredCoins = props.coins.filter(coin => {
//     return Object.keys(coin).some(
//       key =>
//         (typeof coin[key] === "string" &&
//           coin[key].toLowerCase().includes(lowercasedCoins.toLowerCase())) ||
//         !lowercasedCoins
//     );
//   });

//   filteredCoins = props.MarketCapLow ? filteredCoins.reverse() : filteredCoins;

//   return (
//     <>
//       {filteredCoins.map(coin => {
//         const {
//           rank,
//           logo_url,
//           name,
//           ["1d"]: { price_change_pct },
//           currency,
//           price
//         } = coin;

//         const newMarketPct = (price_change_pct * 100).toFixed(2);

//         const newPrice = Math.floor(price * 100) / 100;

//         return (
//           <Styles.MobileRowStyles key={rank}>
//             <MobileLink
//               to={{
//                 pathname: `/prices/${coin.currency}`,
//                 state: { coins: props.coins }
//               }}
//             >
//               <Styles.TabelDataStyles grey flex>
//                 <props.CoinIcon
//                   style={{ marginRight: "12px" }}
//                   src={logo_url}
//                 />
//                 {name}
//                 <Styles.TableDataP style={{ color: "#33333380" }}>
//                   {currency}
//                 </Styles.TableDataP>
//               </Styles.TabelDataStyles>

//               <Styles.TabelDataStyles>
//                 <div>${newPrice}</div>

//                 <div
//                   style={
//                     price_change_pct.charAt(0) === "-"
//                       ? { color: "#ff2734" }
//                       : { color: "#23cc9a" }
//                   }
//                 >
//                   {newMarketPct}%
//                 </div>
//               </Styles.TabelDataStyles>
//             </MobileLink>
//           </Styles.MobileRowStyles>
//         );
//       })}
//     </>
//   );
// };

// export default PriceBodyMobile;
