import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { WhatsappSquare } from "styled-icons/boxicons-logos/WhatsappSquare";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { GithubSquare } from "styled-icons/fa-brands/GithubSquare";
import { Gist } from "styled-icons/octicons/Gist";
import { Home } from "styled-icons/boxicons-solid/Home";
import { Lightbulb } from "styled-icons/typicons/Lightbulb";

const NavStyle = styled.div`
  display: grid;
  height: 100%;
  width: 40px;
  background: #ffffff;
  position: fixed;
  box-shadow: 2px 0 17px #e4e4e4;
`;

const Homepage = styled(Home)`
  margin: 8px;
  cursor: pointer;
  color: #b600ff;
  transition: 0.5s;

  &:hover {
    color: #e9b3ff;
    transition: 0.5s;
  }
`;

const Whats = styled(WhatsappSquare)`
  margin: 5px;
  cursor: pointer;
  color: #00b700;
  transition: 0.5s;

  &:hover {
    color: #00d000;
    transition: 0.5s;
  }
`;

const Linke = styled(LinkedinSquare)`
  margin: 5px;
  cursor: pointer;
  color: #00b7ff;
  transition: 0.5s;

  &:hover {
    color: #54cfff;
    transition: 0.5s;
  }
`;

const Github = styled(GithubSquare)`
  margin: 8px;
  cursor: pointer;
  color: #000000;
  transition: 0.5s;

  &:hover {
    color: #9e9e9e;
    transition: 0.5s;
  }
`;

const Gists = styled(Gist)`
  margin: 8px;
  cursor: pointer;
  color: #000000;
  transition: 0.5s;

  &:hover {
    color: #9e9e9e;
    transition: 0.5s;
  }
`;

const About = styled(Lightbulb)`
  margin: 8px 2px;
  cursor: pointer;
  color: #000000;
  transition: 0.5s;

  &:hover {
    color: #9e9e9e;
    transition: 0.5s;
  }
`;

const Tooltip0 = styled.div`
  border-radius: 4px;
  height: 22px;
  background-color: #b600ff;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

const Tooltip1 = styled.div`
  border-radius: 4px;
  height: 22px;
  background-color: #4cb80d;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

const Tooltip2 = styled.div`
  border-radius: 4px;
  height: 22px;
  background-color: #08b6fa;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

const Tooltip3 = styled.div`
  border-radius: 4px;
  height: 23px;
  background-color: #000000;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

const Tooltip4 = styled.div`
  border-radius: 4px;
  height: 23px;
  background-color: #000000;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

const Tooltip5 = styled.div`
  border-radius: 4px;
  height: 23px;
  background-color: #000000;
  position: absolute;
  margin: 23% 0 0 3rem;
  box-shadow: 3px 2px 4px 0px #0000002e;
`;

const Text = styled.span`
  color: #ffffff;
  padding: 0 9px;
`;

const Divisa = styled.div`
  border-bottom: solid 2px #e2e2e2;
  width: 24px;
  margin: 6px auto;
`;

const Nav = props => {
  const [hidden0, setHidden0] = useState(true);
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);
  const [hidden5, setHidden5] = useState(true);

  return (
    <NavStyle>
      <div>
        <div>
          <Tooltip0 hidden={hidden0}>
            <Text>Home</Text>
          </Tooltip0>
          <Link to="/">
            <Homepage
              onMouseEnter={e => setHidden0(false)}
              onMouseLeave={e => setHidden0(true)}
            />
          </Link>
        </div>
        <Divisa />

        <div>
          <Tooltip1 hidden={hidden1}>
            <Text>WhatsApp</Text>
          </Tooltip1>
          <a
            target="_black"
            href="https://wa.me/5511959402088/?text=Olá%20!%20Vim%20pelo%20link%20da%20personal%20Git"
          >
            <Whats
              onMouseEnter={e => setHidden1(false)}
              onMouseLeave={e => setHidden1(true)}
            />
          </a>
        </div>

        <div>
          <Tooltip2 hidden={hidden2}>
            <Text>Linkedin</Text>
          </Tooltip2>
          <a
            target="_black"
            href="https://www.linkedin.com/in/lucas-moraes-silva/"
          >
            <Linke
              onMouseEnter={e => setHidden2(false)}
              onMouseLeave={e => setHidden2(true)}
            />
          </a>
        </div>
        <Divisa />
        <div>
          <Tooltip3 hidden={hidden3}>
            <Text>Repositories</Text>
          </Tooltip3>
          <Link to="repositories">
            <Github
              onMouseEnter={e => setHidden3(false)}
              onMouseLeave={e => setHidden3(true)}
            />
          </Link>
        </div>
        <div>
          <Tooltip4 hidden={hidden4}>
            <Text>Gists</Text>
          </Tooltip4>
          <Link to="gists">
            <Gists
              onMouseEnter={e => setHidden4(false)}
              onMouseLeave={e => setHidden4(true)}
            />
          </Link>
        </div>
        <div>
          <Tooltip5 hidden={hidden5}>
            <Text>Sobre</Text>
          </Tooltip5>
          <Link to="/">
            <About
              onMouseEnter={e => setHidden5(false)}
              onMouseLeave={e => setHidden5(true)}
            />
          </Link>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;
