import React, {FunctionComponent} from "react";
import {TAboutProps} from "./interface";
import { Col, Col2, LabelTwo, Row, Tag, TextTitle } from "./styles";

const About: FunctionComponent<TAboutProps> = ({theme}) => {
    console.log(theme)
  return (
    <LabelTwo>
      <Col>
        <TextTitle theme={theme}>
          Este projeto foi desenvolvido com o intuito de ser currículum e portifólio online para desenvolvedores.
        </TextTitle>
        <TextTitle theme={theme}>Totalmente Open Source, o projeto deverá ser ajustado e melhorado ao gosto do usuário.</TextTitle>
        <br />
      </Col>
      <Row>
        <Col2>
          <TextTitle theme={theme}>As tecnologias utilizadas para esse projeto foram:</TextTitle>
          <br />

          <div style={{width: "100%", display: "Flex"}}>
            <Tag />
            <TextTitle theme={theme}>ReactJS</TextTitle>
          </div>
          <div style={{width: "100%", display: "Flex"}}>
            <Tag />
            <TextTitle theme={theme}>TypeScript</TextTitle>
          </div>
          <div style={{width: "100%", display: "Flex"}}>
            <Tag />
            <TextTitle theme={theme}>GraphQL</TextTitle>
          </div>
          <div style={{width: "100%", display: "Flex"}}>
            <Tag />
            <TextTitle theme={theme}>Styled components</TextTitle>
          </div>
          <div style={{width: "100%", display: "Flex"}}>
            <Tag />
            <TextTitle theme={theme}>Styled Icons</TextTitle>
          </div>
        </Col2>
      </Row>
    </LabelTwo>
  );
};

export default About;