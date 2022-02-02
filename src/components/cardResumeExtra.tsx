import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { RightArrowAlt } from "styled-icons/boxicons-regular/RightArrowAlt";
import { Check } from "styled-icons/boxicons-regular/Check";


interface CardResumeExtraProps {
  theme: boolean;
}

const CardResumeExtra: FunctionComponent<CardResumeExtraProps> = props => {
  const theme = Boolean( props.theme );
  const Card = styled.div`
    background-color: ${ theme ? "#252839" : "#ffffff" };
    border: solid 1px ${ theme ? "#252839" : "#cecece" };
    transition: 0.5s;
    height: auto;
    border-radius: 7px;
    margin: 7px;
    box-shadow: 3px 2px 4px 0px
      ${ theme ? "none" : "#0000002e" };
  `;

  const CardHeader = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: ${ theme ? "#2e3348" : "#ffbc59" };
    transition: 0.5s;
    padding: 10px;
  `;

  const CardBody = styled.div`
  transition: 0.5s;
    border-radius: 7px;
    display: flex;
    flex-wrap: wrap;
    padding: 9px;
  `;

  //Caso queira colocar titulo no reader
  const Text = styled.span`
    font-size: 16px;
    margin: 1rem;
    color: ${ theme ? "#e4e4e4" : "#754702" };
    transition: 0.5s;
    font-weight: bold;
    vertical-align: bottom;
  `;

  const TextToBody = styled.span`
    font-size: 16px;
    margin-left: 1rem;
    color: ${ theme ? "#e4e4e4" : "#000000" };
    transition: 0.5s;
    align-self: start;
    width: 100%;
  `;

  const Tag = styled( RightArrowAlt )`
    color: #0088ff;
    width: 26px;
    align-self: start;
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
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    @media only screen and (min-width: 1200px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  `;

  const Checked = styled( Check )`
    color: ${ theme ? "#e4e4e4" : "#754702" };
    width: 26px;
    align-self: start;
`;

  return (
    <>
      <Col>
        <Card>
          <CardHeader>
            <Checked />
            <Text>Resumo</Text>
          </CardHeader>
          <CardBody>
            <div style={ { width: "100%", display: "Flex" } }>
              <Tag />
              <TextToBody>
                <b>Projeto Whatzator:</b> Extenção para chrome que adiciona o contato no whatsapp
                sem a necessidade de adicionar na lista de contatos.
              </TextToBody>
            </div>
            <div style={ { width: "100%", display: "Flex", marginTop: "10px" } }>
              <Tag />
              <TextToBody>
                <b>Ultimos estudos:</b> TypeScript com ReactJS, SQL Server, Python
              </TextToBody>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default CardResumeExtra;
