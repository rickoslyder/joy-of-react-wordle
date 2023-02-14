import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  // console.log("guess", guess);
  return range(5).map((num) => (
    <span key={num} className={`cell ${guess[num]?.status || ""}`}>
      {guess[num]?.letter || ""}
    </span>
  ));
}

export default Guess;
