import React from "react";
import styled from "styled-components";
import { ScGithub } from "styled-icons/evil/ScGithub";
import { LogoGithub } from "styled-icons/octicons/LogoGithub";
import { FileCode } from "styled-icons/fa-regular/FileCode";
import { Eye } from "styled-icons/fa-regular/Eye";

const CardsToRepos = props => {
  function generateRandomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ", " + 0.3 + ")";
  }

  const Card = styled.div`
    background-color: ${props => generateRandomColor()};
    border: solid 1px #cecece;
    height: 8rem;
    border-radius: 7px;
    margin: 7px;
    box-shadow: 3px 2px 4px 0px #0000002e;
  `;

  const CardHeader = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: #000000;
    height: 3rem;
    box-shadow: 0px 11px 10px -7px #15151570;
  `;

  const GitLogo = styled(ScGithub)`
    width: 50px;
    color: #fff;
  `;

  const GitText = styled(LogoGithub)`
    width: 50px;
    color: #fff;
  `;

  const See = styled(Eye)`
    width: 31px;
    color: #56ff00;
    margin: 10px;
    float: right;
  `;
  const CardBody = styled.div`
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    display: flex;
  `;

  const Icon = styled(FileCode)`
    width: 38px;
    color: #000;
    padding: 15px;
  `;

  const Text = styled.span`
    height: 29px;
    padding: 30px 0 20px 0;
    font-size: 15px;
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
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 25%;
      max-width: 25%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
  `;

  return (
    <>
      <Col>
        <Card random>
          <CardHeader>
            <GitLogo />
            <GitText />
            <a
              href={`https://github.com/lucas-moraes/${props.text}`}
              target={"_blank"}
            >
              <See />
            </a>
          </CardHeader>
          <CardBody>
            <Icon />
            <Text>{props.text}</Text>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardsToRepos;
