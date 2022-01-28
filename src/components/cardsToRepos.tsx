import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ScGithub } from "styled-icons/evil/ScGithub";
import { LogoGithub } from "styled-icons/octicons/LogoGithub";
import { FileCode } from "styled-icons/fa-regular/FileCode";
import { Code } from "styled-icons/fa-solid/Code";
import { Eye } from "styled-icons/fa-regular/Eye";

interface CardsToReposProps {
  theme: boolean,
  text: string,
  language: string;
}

const CardsToRepos: FunctionComponent<CardsToReposProps> = props => {
  const theme = Boolean( props.theme );
  function generateRandomColor () {
    let r = Math.round( Math.random() * 255 );
    let g = Math.round( Math.random() * 255 );
    let b = Math.round( Math.random() * 255 );
    return "rgb(" + r + ", " + g + ", " + b + ", " + 0.3 + ")";
  }

  const Card = styled.div`
    background-color: ${ props => generateRandomColor() };
    border: solid 1px ${ theme ? "transparent" : "#cecece" };
    height: 120px;
    border-radius: 7px;
    transition: 0.2s;
    margin: 7px;
    box-shadow: ${ theme
      ? "0 2px 11px 0px rgba(0, 0, 0)"
      : "3px 2px 4px 0px #0000002e" };
    &:hover {
      transform: scale(1.05);
      }
  `;

  const CardHeader = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: ${ theme ? "#d1d2d433" : "#000000" };
    transition: 0.5s;
    height: 3rem;
    box-shadow: ${ theme ? "none" : "0px 11px 10px -7px #15151570" };
  `;

  const GitLogo = styled( ScGithub )`
    width: 50px;
    color: #fff;
  `;

  const GitText = styled( LogoGithub )`
    width: 50px;
    color: #fff;
  `;

  const See = styled( Eye )`
    width: 31px;
    color: #56ff00;
    margin: 10px;
    float: right;
  `;
  const CardBody = styled.div`
    margin: 0 10px;
    display: flex;
  `;

  const Icon = styled( FileCode )`
    width: 20px;
    color: #000;
    padding: 7px;
    color: ${ theme ? "#FFF" : "#000" };
    transition: 0.5s;
  `;

  const IconCode = styled( Code )`
  width: 20px;
  color: #000;
  padding: 1px 7px;
  color: ${ theme ? "#FFF" : "#000" };
  transition: 0.5s;
`;

  const Text = styled.span`
    align-self: center;
    font-size: 12px;
    color: ${ theme ? "#FFF" : "#000" };
    transition: 0.5s;
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
        <a
          style={ { textDecoration: 'none' } }
          href={ `https://github.com/lucas-moraes/${ props.text }` }
          target={ "_blank" }
        >
          <Card>
            <CardHeader>
              <GitLogo />
              <GitText />
              <See />
            </CardHeader>
            <CardBody>
              <div>
                <Icon />
              </div>
              <Text>{ props.text }</Text>
            </CardBody>
            <CardBody>
              <div>
                <IconCode />
              </div>
              <Text>{ props.language }</Text>
            </CardBody>
          </Card>
        </a>
      </Col>
    </>
  );
};

export default CardsToRepos;
