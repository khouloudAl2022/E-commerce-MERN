import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <Container>
      <h2>Checkout Successful</h2>
      <div style={{ backgroundColor: "red", position: "relative" }}>
        <StyledImage src="https://i.gifer.com/7efs.gif" alt="GIF" />
      </div>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10mins.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@kikishop.com</strong>
      </p>
    </Container>
  );
};

export default Success;
const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
const StyledImage = styled.img`
  width: 150px;
`;
