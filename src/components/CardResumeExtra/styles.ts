import styled from "styled-components";
import {Check, RightArrowAlt} from "styled-icons/boxicons-regular";

export const Card = styled.div<{theme: boolean}>`
  background-color: ${(props) => (props.theme === true ? "#252839" : "#ffffff")};
  border: solid 1px ${(props) => (props.theme === true ? "#252839" : "#cecece")};
  transition: 0.5s;
  height: auto;
  border-radius: 7px;
  margin: 7px;
  box-shadow: 3px 2px 4px 0px ${(props) => (props.theme === true ? "none" : "#0000002e")};
`;

export const CardHeader = styled.div<{theme: boolean}>`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: ${(props) => (props.theme === true ? "#2e3348" : "#ffbc59")};
  transition: 0.5s;
  padding: 10px;
`;

export const CardBody = styled.div`
  transition: 0.5s;
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  padding: 9px;
`;

export const CardBodyContainerOne = styled.div`
    width: 100%; 
    display: flex;
`;

export const CardBodyContainerTwo = styled.div`
    width: 100%; 
    display: flex;
    marginTop: 10px;
`;

export const TextTitle = styled.span<{theme: boolean}>`
  font-size: 16px;
  margin: 1rem;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#754702")};
  transition: 0.5s;
  font-weight: bold;
  vertical-align: bottom;
`;

export const TextToBody = styled.span<{theme: boolean}>`
  font-size: 16px;
  margin-left: 1rem;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#000000")};
  transition: 0.5s;
  align-self: start;
  width: 100%;
`;

export const Tag = styled(RightArrowAlt)`
  color: #0088ff;
  width: 26px;
  align-self: start;
`;

export const Col = styled.div`
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

export const Checked = styled(Check)<{theme: boolean}>`
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#754702")};
  width: 26px;
  align-self: start;
`;
