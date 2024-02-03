import React, {FunctionComponent} from "react";
import {CardChart} from "../CardChart";
import {TCardSkillsProps} from "./interface";
import {Col, Card, CardHeader, Checked, CardBody, TextTitle} from "./styles";

const CardSkills: FunctionComponent<TCardSkillsProps> = (props) => {
  return (
    <Col>
      <Card theme={props.theme}>
        <CardHeader theme={props.theme}>
          <Checked theme={props.theme}/>
          <TextTitle theme={props.theme}>Developer Skills</TextTitle>
        </CardHeader>
        <CardBody>
          <CardChart {...props} text={"CSS"} score={7} scorecolor={"#d54dff"} />
          <CardChart {...props} text={"GraphQL"} score={6} scorecolor={"#ff4dbe"} />
          <CardChart {...props} text={"HTML"} score={9} scorecolor={"#4d9aff"} />
          <CardChart {...props} text={"MongoDB"} score={7} scorecolor={"#4eff4d"} />
          <CardChart {...props} text={"JavaScript"} score={7} scorecolor={"#ffba4d"} />
          <CardChart {...props} text={"PHP"} score={7} scorecolor={"#ff4d4d"} />
          <CardChart {...props} text={"ReactJS"} score={8} scorecolor={"#4dccff"} />
          <CardChart {...props} text={"SQL"} score={6} scorecolor={"#00c087"} />
          <CardChart {...props} text={"TypeScript"} score={6} scorecolor={"#808080"} />
          <CardChart {...props} text={"AngularJS"} score={5} scorecolor={"#faa179"} />
          <CardChart {...props} text={"Python"} score={5} scorecolor={"#ff93ac"} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardSkills;
