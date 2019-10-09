import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "../../../../pages/PriceDetail/PriceDetailStyles";

const AsideBodyItems = (props, match) => {
  console.log(match);
  console.log(props.allCoins);
  console.log(props.price.currency);
  return (
    <Styles.AsideAssetBody>
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

export default AsideBodyItems;
