import React from "react";
import styled from "styled-components";

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
  font-family: "Lato", sans-serif;
  font-size: 25px;
  margin-bottom: 1.5rem;
  margin-top: 5px;
`;

const LabelHeader = () => (
  <>
    <Label>
      <LabelOne>Billiard Bools</LabelOne>
    </Label>
  </>
);

export default LabelHeader;
