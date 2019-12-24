import React from "react";
import styled from "styled-components";
import { RightArrowAlt } from "styled-icons/boxicons-regular/RightArrowAlt";


const About = () => {
  const LabelTwo = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
  `;

  const Text = styled.p`
    color: #040404;
    font-size: 15px;
    margin: auto 0;
    width: 100%;
    padding-left: 7px;
  `;

  const Tag = styled(RightArrowAlt)`
    color: #0088ff;
    width: 26px;
    align-self: start;
  `;


  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
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
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    @media only screen and (min-width: 768px) {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
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

  const Col2 = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media only screen and (max-width: 600px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 600px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 768px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
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
    <LabelTwo>
      <Col>
        <Text>
          Este projeto foi desenvolvido com o intuito de ser currículum e
          portifólio online para desenveolvedores.
        </Text>
        <Text>
          Totalmente Open Source, o projeto deverá ser ajustado e melhorado ao
          gosto do usuário.
        </Text>
        <br></br>
      </Col>
      <Row>
        <Col2>
          <Text>As tecnologias utilizadas para esse projeto foram:</Text>
          <br></br>

          <div style={{ width: "100%", display: "Flex" }}>
            <Tag />
            <Text>ReactJS</Text>
          </div>
          <div style={{ width: "100%", display: "Flex" }}>
            <Tag />
            <Text>React Router Dom</Text>
          </div>
          <div style={{ width: "100%", display: "Flex" }}>
            <Tag />
            <Text>Styled components</Text>
          </div>
          <div style={{ width: "100%", display: "Flex" }}>
            <Tag />
            <Text>Styled Icons</Text>
          </div>
        </Col2>
      </Row>
    </LabelTwo>
  );
};

export default About;
