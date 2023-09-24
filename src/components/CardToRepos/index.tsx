/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FunctionComponent} from "react";
import {ICardsToReposProps} from "./interface";
import {Card, CardBody, CardHeader, Col, GitLogo, GitText, Icon, IconCode, See, TextTitle} from "./styles";

const CardsToRepos: FunctionComponent<ICardsToReposProps> = (props) => {
  return (
    <Col>
      <a
        style={{textDecoration: "none"}}
        href={`${import.meta.env.VITE_GITHUB_PERSONAL_ADDRESS}/${props.text}`}
        target={"_blank"}
      >
        <Card>
          <CardHeader theme={props.theme}>
            <GitLogo />
            <GitText />
            <See />
          </CardHeader>
          <CardBody>
            <div>
              <Icon theme={props.theme} />
            </div>
            <TextTitle theme={props.theme}>{props.text}</TextTitle>
          </CardBody>
          <CardBody>
            <div>
              <IconCode theme={props.theme} />
            </div>
            <TextTitle theme={props.theme}>{props.language}</TextTitle>
          </CardBody>
        </Card>
      </a>
    </Col>
  );
};

export default CardsToRepos;
