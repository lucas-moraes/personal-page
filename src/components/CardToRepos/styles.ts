import styled from "styled-components";
import { Eye, ScGithub } from "styled-icons/evil";
import { FileCode } from "styled-icons/fa-regular";
import { Code } from "styled-icons/ionicons-solid";
import { LogoGithub } from "styled-icons/octicons";

function generateRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ", " + 0.3 + ")";
}

export const Card = styled.div`
  background-color: ${() => generateRandomColor()};
  height: 120px;
  border-radius: 7px;
  transition: 0.2s;
  margin: 7px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardHeader = styled.div<{theme: boolean}>`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: ${props => props.theme === true ? "#d1d2d433" : "#000000"};
  transition: 0.5s;
  height: 3rem;
`;

export const GitLogo = styled(ScGithub)`
  width: 50px;
  color: #fff;
`;

export const GitText = styled(LogoGithub)`
  width: 50px;
  color: #fff;
`;

export const See = styled(Eye)`
  width: 31px;
  color: #56ff00;
  margin: 10px;
  float: right;
`;
export const CardBody = styled.div`
  margin: 0 10px;
  display: flex;
`;

export const Icon = styled(FileCode)<{theme: boolean}>`
  width: 20px;
  color: #000;
  padding: 7px;
  color: ${props => props.theme === true ? "#FFF" : "#000"};
  transition: 0.5s;
`;

export const IconCode = styled(Code)<{theme: boolean}>`
  width: 20px;
  color: #000;
  padding: 1px 7px;
  color: ${props => props.theme === true ? "#FFF" : "#000"};
  transition: 0.5s;
`;

export const TextTitle = styled.span<{theme: boolean}>`
  align-self: center;
  font-size: 12px;
  color: ${props => props.theme === true ? "#FFF" : "#000"};
  transition: 0.5s;
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
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media only screen and (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
`;
