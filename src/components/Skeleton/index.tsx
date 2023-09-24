import React, { FunctionComponent } from "react";
import {Card, Col} from "./styles";
import { ISkeletonCardsProps } from "./interface";

export const SkeletonCardToRepos: FunctionComponent<ISkeletonCardsProps> = (props) => {
  return (
    <Col style={{padding: 0, zIndex: -1}}>
      <Card theme={props.theme}/>
    </Col>
  );
};