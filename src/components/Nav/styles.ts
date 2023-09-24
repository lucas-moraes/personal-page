import styled from "styled-components";
import {Coffee, Home, Moon, Sun} from "styled-icons/boxicons-regular";
import {LinkedinSquare, WhatsappSquare} from "styled-icons/boxicons-logos";
import {GithubSquare} from "styled-icons/fa-brands";

export const NavStyle = styled.div<{theme: boolean}>`
  display: grid;
  height: 100%;
  width: 40px;
  background: ${(props) => (props.theme === true ? "#252839" : "#fbfbfb")};
  position: fixed;
  box-shadow: 2px 0 17px ${(props) => (props.theme === true ? "none" : "#e4e4e4")};
  transition: 0.5s;
`;

export const Day = styled(Sun)`
  margin: 8px;
  cursor: pointer;
  color: #ff7700;
  transition: 0.5s;
`;

export const Night = styled(Moon)<{theme: boolean}>`
  margin: 8px;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#b500ff")};
  transition: 0.5s;
`;

export const Homepage = styled(Home)<{theme: boolean}>`
  margin: 8px;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#b500ff")};
  transition: 0.5s;

  &:hover {
    color: #b600ff;
    transition: 0.5s;
  }
`;

export const Whats = styled(WhatsappSquare)<{theme: boolean}>`
  margin: 5px;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#00b700")};
  transition: 0.5s;

  &:hover {
    color: #00b700;
    transition: 0.5s;
  }
`;

export const Linke = styled(LinkedinSquare)<{theme: boolean}>`
  margin: 5px;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#00b7ff")};
  transition: 0.5s;

  &:hover {
    color: #00b7ff;
    transition: 0.5s;
  }
`;

export const Github = styled(GithubSquare)<{theme: boolean}>`
  margin: 8px;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#000000")};
  transition: 0.5s;

  &:hover {
    color: #9e9e9e;
    transition: 0.5s;
  }
`;

export const About = styled(Coffee)<{theme: boolean}>`
  margin: 7px 6px;
  cursor: pointer;
  color: ${(props) => (props.theme === true ? "#e4e4e4" : "#efac17")};
  transition: 0.5s;

  &:hover {
    color: #e2a00e;
    transition: 0.5s;
  }
`;

export const Tooltip0 = styled.div`
  border-radius: 4px;
  height: 22px;
  background-color: #b600ff;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

export const Tooltip1 = styled.div`
  border-radius: 4px;
  height: 22px;
  background-color: #4cb80d;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

export const Tooltip2 = styled.div`
  border-radius: 4px;
  height: 22px;
  background-color: #08b6fa;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

export const Tooltip3 = styled.div`
  border-radius: 4px;
  height: 23px;
  background-color: #000000;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

export const Tooltip4 = styled.div`
  border-radius: 4px;
  height: 23px;
  background-color: #000000;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

export const Tooltip5 = styled.div`
  border-radius: 4px;
  height: 23px;
  background-color: #e2a00e;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

export const TextTitle = styled.span`
  color: #ffffff;
  padding: 0 9px;
`;

export const Divisa = styled.div`
  border-bottom: solid 2px #e2e2e2;
  width: 24px;
  margin: 6px auto;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  margin: 6px;
  width: 27px;
  height: 15px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 9px;
    height: 9px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  background: #4e5579;
  width: 21px;
  height: 15px;
  &:checked + ${CheckBoxLabel} {
    background: #4e5579;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 9px;
      height: 9px;
      margin-left: 15px;
      transition: 0.1s;
      background: #ffffff;
    }
  }
`;
