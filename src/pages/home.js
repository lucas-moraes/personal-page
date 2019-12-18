import React from "react";
import styled from "styled-components";
import CardsToHome from "../components/cardsToHome";

const Home = () => {
  const LabelTwo = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
  `;

  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;


  return (
    <LabelTwo>
      <Row><CardsToHome /></Row>
    </LabelTwo>
  );
};

export default Home;
