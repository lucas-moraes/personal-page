import React, { FunctionComponent } from "react";
import CardResumeExtra from "../../components/cardResumeExtra";
import CardSkills from "../../components/CardSkills";
import CardResume from "../../components/CardResume";
import { THomeProps } from "./interface";
import { LabelTwo, Row, Col1, Col2 } from "./styles";

const Home: FunctionComponent<THomeProps> = ({theme}) => {  
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
