import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";

const DiscoverMoreItems = (props, match) => {
  return (
    //coins showing in the discover more component
    //under the buy/sell component

    <Styles.AsideAssetBody>
      {/* filter used to remove the coin thats displaying on that page */}
      {props.allCoins
        .filter(coin => coin.name !== props.price.name)
        .map(coin => {
          return (
            <Link to={`/prices`} key={coin.id}>
              <Styles.AsideAssets>
                <Styles.AssetIcon src={coin.logo_url} />
                <Styles.AsideAssetsName>
                  <p>{coin.name}</p>
                  <p
                    style={{
                      color: "rgba(17, 51, 83, 0.6)",
                      fontSize: "14px"
                    }}
                  >
                    {coin.id}
                  </p>
                </Styles.AsideAssetsName>
                <p>${props.simplifyPrice(coin.price)}</p>
              </Styles.AsideAssets>
            </Link>
          );
        })}
    </Styles.AsideAssetBody>
  );
};

export default DiscoverMoreItems;
