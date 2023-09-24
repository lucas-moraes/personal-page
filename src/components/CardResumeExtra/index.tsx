import React, {FunctionComponent} from "react";
import {TCardResumeExtraProps} from "./interface";
import {
  Card,
  CardBody,
  CardBodyContainerOne,
  CardBodyContainerTwo,
  CardHeader,
  Checked,
  Col,
  Tag,
  TextTitle,
  TextToBody,
} from "./styles";

const CardResumeExtra: FunctionComponent<TCardResumeExtraProps> = ({theme}) => (
  <Col>
    <Card theme={theme}>
      <CardHeader theme={theme}>
        <Checked theme={theme} />
        <TextTitle theme={theme}>Resumo</TextTitle>
      </CardHeader>
      <CardBody>
        <CardBodyContainerOne>
          <Tag />
          <TextToBody theme={theme}>
            <b>Projeto Whatzator:</b> Extenção para chrome que adiciona o contato no whatsapp sem a necessidade de
            adicionar na lista de contatos.
          </TextToBody>
        </CardBodyContainerOne>
        <CardBodyContainerTwo>
          <Tag />
          <TextToBody theme={theme}>
            <b>Ultimos estudos:</b> TypeScript com ReactJS, SQL Server, Python
          </TextToBody>
        </CardBodyContainerTwo>
      </CardBody>
    </Card>
  </Col>
);

export default CardResumeExtra;
