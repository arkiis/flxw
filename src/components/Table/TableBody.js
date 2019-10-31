import React from "react";
import Button from "../../UI/Forms/Button/Button";
import * as Styles from "./Tables.styles";

const TableBody = ({ coin }) => {
  const { id, symbol, name, price, change, icon } = coin;
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
          change.charAt(0) === "+" ? { color: "#23cc9a" } : { color: "#eb5d5e" }
        }
      >
        {change}
      </Styles.TabelDataStyles>
      <Button padding width noMargin>
        Buy
      </Button>
    </Styles.TableRowStyles>
  );
};

export default TableBody;
