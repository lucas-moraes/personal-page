import React from "react";
import styled from "styled-components";
import { CardChart } from "./Charts/cardChart";

const CardsToHome = () => {
  const Card = styled.div`
    background-color: #ffffff;
    border: solid 1px #cecece;
    height: auto;
    border-radius: 7px;
    margin: 7px;
    box-shadow: 3px 2px 4px 0px #0000002e;
  `;

  const CardHeader = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: #b2f1eb;
    box-shadow: 0px 11px 10px -7px #b2fbff;
    padding: 10px;
  `;

  const CardBody = styled.div`
    border-radius: 7px;
    display: flex;
  `;

  const Text = styled.span`
    font-size: 16px;
    margin: 1rem;
    color: #008275;
  `;

  const Col = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    @media only screen and (max-width: 600px) {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    @media only screen and (min-width: 600px) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    @media only screen and (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
  `;

  return (
    <>
      <Col>
        <Card>
          <CardHeader>
            <Text>Developer Skills</Text>
          </CardHeader>
          <CardBody>
            <CardChart />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardsToHome;
