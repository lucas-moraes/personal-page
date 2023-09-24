import React, {FunctionComponent} from "react";
import {TLabelHeaderProps} from "./interface";
import { Label, LabelOne } from "./style";

const LabelHeader: FunctionComponent<TLabelHeaderProps> = (props) => {
  return (
    <>
      <Label>
        <LabelOne theme={props.theme}>Lucas Moraes</LabelOne>
      </Label>
    </>
  );
};
export default LabelHeader;
