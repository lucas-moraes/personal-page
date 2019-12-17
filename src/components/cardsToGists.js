import React from "react";
import styled from "styled-components";
import { FileJs } from "styled-icons/boxicons-solid/FileJs";

const CardToGists = props => {
  const Card = styled.div`
    display: flex;
    width: 100%;
    margin: 5px 0;
  `;

  const JS = styled(FileJs)`
    width: 27px;
    color: #ffc800;
  `;

  const Text = styled.p`
    color: #040404;
    font-size: 12px;
    margin: auto 0;
    width: 100%;
  `;

  return (
    <Card>
      <JS />
      <a href={props.url} target={"_blank"}>
        <Text>{props.description}</Text>
      </a>
    </Card>
  );
};

export default CardToGists;
