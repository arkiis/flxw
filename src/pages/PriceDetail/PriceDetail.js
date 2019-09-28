import React, { useState, useEffect } from "react";
import * as Styles from "./PriceDetailStyles";

const PriceDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [price, setPrice] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=ba5753b91002279e7338b58479c03ea5&ids=${match.params.id}&interval=1h,1d,7d,30d,365d`
    );
    const prices = await fetchItem.json();
    setPrice(prices[0]);
    console.log(prices);
  };

  return (
    <div>
      <Styles.Title>{price.name}</Styles.Title>
    </div>
  );
};

export default PriceDetail;
