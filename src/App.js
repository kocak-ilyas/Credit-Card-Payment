import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards";

export default function App() {
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setCard({ focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ [name]: value });
  };
  return (
    <div id="PaymentForm">
      <Cards
        cvc={card.cvc}
        expiry={card.expiry}
        focused={card.focus}
        name={card.name}
        number={card.number}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        ...
      </form>
    </div>
  );
}
