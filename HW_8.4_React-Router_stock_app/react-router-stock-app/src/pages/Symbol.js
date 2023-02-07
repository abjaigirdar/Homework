import React from "react";
import { useParams, Link } from "react-router-dom";

function Symbol({ data }) {
  const { symbol } = useParams();
  const stockInfo = data.find((parameter) => parameter.symbol === symbol);

  return (
    <div className="stock-table">
      <h1>Ticker: {stockInfo.symbol}</h1>
      <h1>Company: {stockInfo.name}</h1>
      <h1>Last Price: {stockInfo.lastPrice}</h1>
      <h2>Change: {stockInfo.change}</h2>
      <h2>High: {stockInfo.high}</h2>
      <h2>Low: {stockInfo.low}</h2>
      <h2>Open: {stockInfo.open}</h2>
      <>
        <Link to="/Dashboard">
          <button>Back</button>
        </Link>
      </>
    </div>
  );
}

export default Symbol;