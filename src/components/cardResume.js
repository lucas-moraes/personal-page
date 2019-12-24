import React from "react";
import styled from "styled-components";

const CardResume = () => {
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
    background-color: #a059ff;
    padding: 10px;
  `;

  const CardBody = styled.div`
    border-radius: 7px;
    display: flex;
    flex-wrap: wrap;
  `;

  const Text = styled.span`
    font-size: 16px;
    margin: 1rem;
    color: #ffffff;
    font-weight: bold;
  `;

  const TextToBody = styled.span`
    font-size: 16px;
    margin: 1rem;
    color: #000000;
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
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  `;

  return (
    <>
      <Col>
        <Card>
          <CardHeader>
            <Text>Resumo</Text>
          </CardHeader>
          <CardBody>
            <TextToBody>
              Desenvolvedor web há 3 anos.
            </TextToBody>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardResume;