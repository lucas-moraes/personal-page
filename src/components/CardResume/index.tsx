import React, {FunctionComponent} from "react";
import {TCardResumeProps} from "./interface";
import {Card, CardBody, CardHeader, Checked, Col, TextTitle, TextToBody} from "./styles";

const CardResume: FunctionComponent<TCardResumeProps> = ({theme}) => {
  return (
    <Col>
      <Card theme={theme}>
        <CardHeader theme={theme}>
          <Checked theme={theme} />
          <TextTitle theme={theme}>Perfil</TextTitle>
        </CardHeader>
        <CardBody>
          <TextToBody theme={theme}>Desenvolvedor web há 5 anos.</TextToBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardResume;
