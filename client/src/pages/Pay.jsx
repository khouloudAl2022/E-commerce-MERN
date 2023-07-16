import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51NTBLaEsMypiASpd766MRODObtqnQiZbeaLfBMS7yumUzAmf6LEGRKnnGUtnwntJ20LRjhsqNbcq9qjj82rVuVDq00tK9kXCqq";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect =
    (() => {
      const makeRequest = async () => {
        try {
          axios.post()
        } catch (error) {
          console.log(error);
        }
      };
    },
    [stripeToken]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Kiki Shop"
        image="https://i.pinimg.com/736x/b8/b6/3d/b8b63da42a30e19926a2d3ed5951c239.jpg"
        billingAddress
        shippingAddress
        description="Your total is 20Dt"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
