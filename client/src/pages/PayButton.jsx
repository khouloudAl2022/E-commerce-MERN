import React, { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51NUe30DGVlSZvv6ZwLxCG7iXkShogtjuKDlty1IKf6osiovFmZQnb7l4eLEigBA9E17c6Fxk3UV0UAXclbuuJvP600Pnk5dMFj";
const PayButton = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </span>
      ) : (
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
      )}
    </div>
  );
};

export default PayButton;
