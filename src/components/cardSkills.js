import React from "react";
import styled from "styled-components";
import { CardChart } from "./cardChart";

const CardSkills = props => {
  const theme = Boolean(props.theme);
  const Card = styled.div`
    background-color: ${theme ? "#252839" : "#ffffff"};
    border: solid 1px ${theme ? "#252839" : "#cecece"};
    height: auto;
    border-radius: 7px;
    margin: 7px;
    box-shadow: 3px 2px 4px 0px ${theme ? "none" : "#0000002e"};
  `;

  const CardHeader = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: ${theme ? "#2e3348" : "#59ff7d"};
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
    color: ${theme ? "#e4e4e4" : "#2f7942"};
    font-weight: bold;
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
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
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
            <CardChart
              {...props}
              text={"CSS"}
              score={7}
              scoreColor={"#d54dff"}
            />
            <CardChart
              {...props}
              text={"GraphQL"}
              score={6}
              scoreColor={"#ff4dbe"}
            />
            <CardChart
              {...props}
              text={"HTML"}
              score={9}
              scoreColor={"#4d9aff"}
            />
            <CardChart
              {...props}
              text={"JQuery"}
              score={8}
              scoreColor={"#4eff4d"}
            />
            <CardChart
              {...props}
              text={"JavaScript"}
              score={7}
              scoreColor={"#ffba4d"}
            />
            <CardChart
              {...props}
              text={"PHP"}
              score={7}
              scoreColor={"#ff4d4d"}
            />
            <CardChart
              {...props}
              text={"ReactJS"}
              score={8}
              scoreColor={"#4dccff"}
            />
            <CardChart
              {...props}
              text={"SQL"}
              score={6}
              scoreColor={"#fffa00"}
            />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardSkills;
