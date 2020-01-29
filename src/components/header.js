import React from "react";
import styled from "styled-components";

const LabelHeader = props => {
  const theme = Boolean(props.theme);
  const Label = styled.div`
    z-index: -1;
    margin-left: 45px;
    height: 100%;
    position: absolute;
    width: 85%;
  `;

  const LabelOne = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
    padding-left: 7px;
    color: ${theme ? "#e4e4e4" : "#000000"};
    font-family: "Lato", sans-serif;
    font-size: 25px;
    margin-bottom: 1.5rem;
    margin-top: 5px;
  `;
  return (
    <>
      <Label>
        <LabelOne>Lucas Moraes</LabelOne>
      </Label>
    </>
  );
};
export default LabelHeader;
