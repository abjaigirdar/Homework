import React from "react";
import { Link } from "react-router-dom";

function Stonks({ data }) {
  return (
    <div>
      <h1>Most Active STONKS</h1>
      <div>
        {data.map((parameter) => (
          <div key={parameter.symbol}>
            <Link to={`/Dashboard/${parameter.symbol}`}>
              <h1>
                {parameter.symbol}: {parameter.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stonks;