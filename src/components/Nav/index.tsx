/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FunctionComponent, useState} from "react";
import {Link} from "react-router-dom";
import {INavProps} from "./interface";
import {
  About,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Day,
  Divisa,
  Github,
  Homepage,
  Linke,
  NavStyle,
  Night,
  TextTitle,
  Tooltip0,
  Tooltip1,
  Tooltip2,
  Tooltip3,
  Tooltip5,
  Whats,
} from "./styles";

const Nav: FunctionComponent<INavProps> = (props) => {
  const [hidden0, setHidden0] = useState(true);
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden5, setHidden5] = useState(true);

  return (
    <NavStyle theme={props.theme}>
      <div>
        <div>
          <Tooltip0 hidden={hidden0}>
            <TextTitle>Home</TextTitle>
          </Tooltip0>
          <Link to="/">
            <Homepage
              theme={props.theme}
              onMouseEnter={(e) => setHidden0(false)}
              onMouseLeave={(e) => setHidden0(true)}
              onClick={(e) => setHidden0(true)}
            />
          </Link>
        </div>
        <Divisa />

        <div>
          <Tooltip1 hidden={hidden1}>
            <TextTitle>WhatsApp</TextTitle>
          </Tooltip1>
          <a target="_black" href="https://wa.me/5511959402088/?text=Olá%20!%20Vim%20pelo%20link%20da%20personal%20Git">
            <Whats
              theme={props.theme}
              onMouseEnter={(e) => setHidden1(false)}
              onMouseLeave={(e) => setHidden1(true)}
              onClick={(e) => setHidden1(true)}
            />
          </a>
        </div>

        <div>
          <Tooltip2 hidden={hidden2}>
            <TextTitle>Linkedin</TextTitle>
          </Tooltip2>
          <a target="_black" href="https://www.linkedin.com/in/lucas-moraes-silva/">
            <Linke
              theme={props.theme}
              onMouseEnter={(e) => setHidden2(false)}
              onMouseLeave={(e) => setHidden2(true)}
              onClick={(e) => setHidden2(true)}
            />
          </a>
        </div>
        <Divisa />
        <div>
          <Tooltip3 hidden={hidden3}>
            <TextTitle>Repositorios</TextTitle>
          </Tooltip3>
          <Link to="repositories">
            <Github
              theme={props.theme}
              onMouseEnter={(e) => setHidden3(false)}
              onMouseLeave={(e) => setHidden3(true)}
              onClick={(e) => setHidden3(true)}
            />
          </Link>
        </div>
        <Divisa />
        <div>
          <Tooltip5 hidden={hidden5}>
            <TextTitle>Sobre</TextTitle>
          </Tooltip5>
          <Link to="about">
            <About
              theme={props.theme}
              onMouseEnter={(e) => setHidden5(false)}
              onMouseLeave={(e) => setHidden5(true)}
              onClick={(e) => setHidden5(true)}
            />
          </Link>
        </div>
        <Divisa />
        <div>
          {props.theme ? (
            <Night theme={props.theme} onClick={props.handleChange} />
          ) : (
            <Day onClick={props.handleChange} />
          )}
          <CheckBoxWrapper>
            <CheckBox id="checkbox" checked={props.theme} onChange={props.handleChange} type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;
