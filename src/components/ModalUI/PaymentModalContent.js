import React from "react";
import * as Styles from "./PaymentModuleStyles";
const PaymentModalContent = props => {
  return (
    <Styles.ModalItemsContainer>
      {props.allCoins
        .filter(coin => coin.name !== props.price.name)
        .map(coin => {
          return (
            <Styles.ModalItems
              onClick={() => {
                props.setIcon(coin.logo_url);
                // setState({ fadeType: "out" });
                props.setPaymentName(coin.name);
              }}
            >
              <Styles.ModalImage src={coin.logo_url} />
              <span>{coin.name}</span>
            </Styles.ModalItems>
          );
        })}
    </Styles.ModalItemsContainer>
  );
};

export default PaymentModalContent;
