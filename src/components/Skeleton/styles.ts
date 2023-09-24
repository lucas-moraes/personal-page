import styled from "styled-components";

export const Card = styled.div<{theme: boolean}>`
background-color: ${props => props.theme === true ? "#252839" : "#ececec"};
height: 8rem;
transition: 0.5s;
border-radius: 7px;
margin: 7px;
-webkit-animation: flickerAnimation 1s infinite;
-moz-animation: flickerAnimation 1s infinite;
-o-animation: flickerAnimation 1s infinite;
animation: flickerAnimation 1s infinite;

@keyframes flickerAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes flickerAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes flickerAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes flickerAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
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