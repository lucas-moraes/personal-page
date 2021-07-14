import React, { FunctionComponent } from "react";
import styled from "styled-components";
import CardResume from "../components/cardResume";
import CardResumeExtra from "../components/cardResumeExtra";
import CardSkills from "../components/cardSkills";

interface HomeProps {
  theme: boolean;
}

const Home: FunctionComponent<HomeProps> = props => {
  const theme = Boolean( props.theme );
  const LabelTwo = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
  `;

  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Col1 = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    @media only screen and (max-width: 600px) {
      flex: 0 0 98.666667%;
      max-width: 98.666667%;
    }
    @media only screen and (min-width: 600px) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    @media only screen and (min-width: 768px) {
      flex: 0 0 94%;
      max-width: 94%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  `;

  const Col2 = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    @media only screen and (max-width: 600px) {
      flex: 0 0 98.666667%;
      max-width: 98.666667%;
    }
    @media only screen and (min-width: 600px) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    @media only screen and (min-width: 768px) {
      flex: 0 0 94%;
      max-width: 94%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  `;

  return (
    <LabelTwo>
      <Row>
        <Col1>
          <CardResume theme={ theme } />
          <CardResumeExtra theme={ theme } />
        </Col1>
        <Col2>
          <CardSkills theme={ theme } />
        </Col2>
      </Row>
    </LabelTwo>
  );
};

export default Home;
