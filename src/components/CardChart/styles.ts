import styled, {keyframes} from "styled-components";

export const Card = styled.div`
  float: left;
  padding: 10px;
  display: flex;

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
    flex: 0 0 26.333333%;
    max-width: 26.333333%;
  }
  @media only screen and (min-width: 992px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;

export const DonutChartAnimation = keyframes<{score: number}>`
  0% {
    -webkit-transform:  rotate(90deg);
  }

  100% {
    -webkit-transform: rotate(${(props) => ((props.score * 10) / 100) * 360}deg);
  }
}
`;

export const DonutChart = styled.div<{theme: boolean}>`
  width: 50px;
  height: 50px;
  background: ${(props) => (props.theme === true ? "#383c51" : "#f5f5f5")};
  position: relative;
  border-radius: 50%;
  -webkit-animation: ${DonutChartAnimation};
`;

export const QuadOneAnimation = keyframes<{score: number}>`
0% {
  -webkit-transform: rotate(90deg);
  box-shadow: none;
}

100% {
  -webkit-transform: rotate(${(props) => ((props.score * 10) / 100) * 360}deg);
}
`;

export const QuadOne = styled.div<{scorecolor: string; shadowscorecolor: string; score: number}>`
  width: ${50 / 2}px;
  height: ${50 / 2}px;
  top: 0;
  left: 0;
  border-radius: 100% 0 0 0;
  background: ${(props) => props.scorecolor};
  box-shadow: 0px 0px 11px 0px ${(props) => props.shadowscorecolor};
  position: absolute;
  -webkit-transform: rotate(${(props) => ((props.score * 10) / 100) * 360}deg);
  -webkit-transform-origin: bottom right;
  -webkit-animation: ${QuadOneAnimation} 1.5s linear;
  display: ${(props) => (props.score * 10 ) > 0 ? "block" : "none"};
`;

export const QuadTwoAnimation = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  box-shadow: none;
}

100% {
  -webkit-transform: rotate(90deg);
}
`;
export const QuadTwo = styled.div<{scorecolor: string; shadowscorecolor: string; score: number}>`
  width: ${50 / 2}px;
  height: ${50 / 2}px;
  top: 0;
  left: 0;
  border-radius: 100% 0 0 0;
  background: ${(props) => props.scorecolor};
  box-shadow: 0px 0px 11px 0px ${(props) => props.shadowscorecolor};
  position: absolute;
  -webkit-transform: rotate(90deg);
  -webkit-transform-origin: bottom right;
  -webkit-animation: ${QuadTwoAnimation} 1.5s linear;
  display: ${(props) => (props.score * 10) > 25 ? "block" : "none"};
`;

export const QuadThreeAnimation = keyframes`
0% {
  -webkit-transform: rotate(90deg);
  box-shadow: none;
}

100% {
  -webkit-transform: rotate(180deg);
}
`;
export const QuadThree = styled.div<{scorecolor: string; shadowscorecolor: string; score: number}>`
  width: ${50 / 2}px;
  height: ${50 / 2}px;
  top: 0;
  left: 0;
  border-radius: 100% 0 0 0;
  background: ${(props) => props.scorecolor};
  box-shadow: 0px 0px 11px 0px ${(props) => props.shadowscorecolor};
  position: absolute;
  -webkit-transform: rotate(180deg);
  -webkit-transform-origin: bottom right;
  -webkit-animation: ${QuadThreeAnimation} 1.5s linear;
  display: ${(props) => (props.score * 10) > 50 ? "block" : "none"};
`;

export const QuadFourAnimation = keyframes`
0% {
  -webkit-transform: rotate(90deg);
  box-shadow: none;
}

100% {
  -webkit-transform: rotate(270deg);
}
`;
export const QuadFour = styled.div<{scorecolor: string, shadowscorecolor: string, score: number}>`
  width: ${50 / 2}px;
  height: ${50 / 2}px;
  top: 0;
  left: 0;
  border-radius: 100% 0 0 0;
  background: ${(props) => props.scorecolor};
  box-shadow: 0px 0px 11px 0px ${(props) => props.shadowscorecolor};
  position: absolute;
  -webkit-transform: rotate(270deg);
  -webkit-transform-origin: bottom right;
  -webkit-animation: ${QuadFourAnimation} 1.5s linear;
  display: ${(props) => (props.score * 10) > 75 ? "block" : "none"};
`;

export const ChartCover = keyframes`
0%,
90% {
  opacity: 1;
}

91%,
100% {
  opacity: 0;
}
`;
export const QuadTop = styled.div<{theme: boolean, score: number}>`
  width: ${50 / 2}px;
  height: ${50 / 2}px;
  top: 0;
  left: 0;
  border-radius: 100% 0 0 0;
  display: block;
  position: absolute;
  background: ${props => props.theme === true ? "#383c51" : "#f5f5f5"};
  -webkit-animation: ${props => (props.score * 10) > 75 ? ChartCover : ""};
  box-shadow: 0px 0px 11px 2px ${props => props.theme === true ? "#383c51" : "#ffffff"};
  opacity: ${props => (props.score * 10) > 75 ? 0 : ""};
`;

export const ChartCenter = styled.div<{theme: boolean, score: number}>`
  top: ${10}px;
  left: ${10}px;
  width: ${50 - 10 * 2}px;
  height: ${50 - 10 * 2}px;
  background: ${props => props.theme === true ? "#252839" : "#ffffff"};
  position: absolute;
  border-radius: 50%;

  &:after {
    display: inline-block;
    width: 100%;
    font-size: ${50 / 3}px;
    color: ${props => props.theme === true  ? "#ffffff" : "#383c51"};
    text-align: center;
    line-height: ${50 - 10 * 2}px;
    content: "${props => (props.score * 10) / 10}";
  }
`;
export const TextTitle = styled.span<{scorecolor: string, theme: boolean}>`
  align-self: center;
  padding: 2px 0 0 11px;
  border-bottom: solid 2px ${props => props.scorecolor};
  border-left: solid 2px ${props => props.scorecolor};
  border-top: solid 2px ${props => props.scorecolor};
  border-radius: 10px 0 0 10px;
  color: ${props => props.theme === true ? "#ffffff" : "#383c51"};
  width: 80%;
`;
