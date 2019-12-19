import React from "react";
import styled, { keyframes } from "styled-components";

export const CardChart = props => {
  let perc = props.score * 10;
  let size = 50;
  let width = 10;
  let ScoreColor = props.scoreColor;
  let ShadowScoreColor = props.scoreColor;

  let deg = (perc / 100) * 360 + "deg";

  const Card = styled.div`
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

  const DonutChartAnimation = keyframes`
    0% {
      -webkit-transform:  rotate(90deg);
    }

    100% {
      -webkit-transform: rotate(${deg});
    }
  }
  `;

  const DonutChart = styled.div`
    width: ${size}px;
    height: ${size}px;
    background: #f5f5f5;
    position: relative;
    border-radius: 50%;
    -webkit-animation: ${DonutChartAnimation};
  `;

  const QuadOneAnimation = keyframes`
  0% {
    -webkit-transform: rotate(90deg);
    box-shadow: none;
  }
  
  100% {
    -webkit-transform: rotate(${deg});
  }
  `;

  const QuadOne = styled.div`
    width: ${size / 2}px;
    height: ${size / 2}px;
    top: 0;
    left: 0;
    border-radius: 100% 0 0 0;
    background: ${ScoreColor};
    box-shadow: 0px 0px 11px 0px ${ShadowScoreColor}
    position: absolute;
    -webkit-transform: rotate(${deg});
    -webkit-transform-origin: bottom right;
    -webkit-animation: ${QuadOneAnimation} 1.5s linear;
    display: ${perc > 0 ? "block" : "none"};
  `;

  const QuadTwoAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    box-shadow: none;
  }
  
  100% {
    -webkit-transform: rotate(90deg);
  }
  `;
  const QuadTwo = styled.div`
    width: ${size / 2}px;
    height: ${size / 2}px;
    top: 0;
    left: 0;
    border-radius: 100% 0 0 0;
    background: ${ScoreColor};
    box-shadow: 0px 0px 11px 0px ${ShadowScoreColor}
    position: absolute;
    -webkit-transform: rotate(90deg);
    -webkit-transform-origin: bottom right;
    -webkit-animation: ${QuadTwoAnimation} 1.5s linear;
    display: ${perc > 25 ? "block" : "none"};
  `;

  const QuadThreeAnimation = keyframes`
  0% {
    -webkit-transform: rotate(90deg);
    box-shadow: none;
  }
  
  100% {
    -webkit-transform: rotate(180deg);
  }
  `;
  const QuadThree = styled.div`
    width: ${size / 2}px;
    height: ${size / 2}px;
    top: 0;
    left: 0;
    border-radius: 100% 0 0 0;
    background: ${ScoreColor};
    box-shadow: 0px 0px 11px 0px ${ShadowScoreColor}
    position: absolute;
    -webkit-transform: rotate(180deg);
    -webkit-transform-origin: bottom right;
    -webkit-animation: ${QuadThreeAnimation} 1.5s linear;
    display: ${perc > 50 ? "block" : "none"};
  `;

  const QuadFourAnimation = keyframes`
  0% {
    -webkit-transform: rotate(90deg);
    box-shadow: none;
  }
  
  100% {
    -webkit-transform: rotate(270deg);
  }
  `;
  const QuadFour = styled.div`
    width: ${size / 2}px;
    height: ${size / 2}px;
    top: 0;
    left: 0;
    border-radius: 100% 0 0 0;
    background: ${ScoreColor};
    box-shadow: 0px 0px 11px 0px ${ShadowScoreColor}
    position: absolute;
    -webkit-transform: rotate(270deg);
    -webkit-transform-origin: bottom right;
    -webkit-animation: ${QuadFourAnimation} 1.5s linear;
    display: ${perc > 75 ? "block" : "none"};
  `;

  const ChartCover = keyframes`
  0%,
  90% {
    opacity: 1;
  }

  91%,
  100% {
    opacity: 0;
  }
  `;
  const QuadTop = styled.div`
    width: ${size / 2}px;
    height: ${size / 2}px;
    top: 0;
    left: 0;
    border-radius: 100% 0 0 0;
    display: block;
    position: absolute;
    background: #f5f5f5;
    -webkit-animation: ${perc > 75 ? ChartCover : ""};
    box-shadow: 0px 0px 11px 2px #ffffff;
    opacity: ${perc > 75 ? 0 : ""};
  `;

  const ChartCenter = styled.div`
    top: ${width}px;
    left: ${width}px;
    width: ${size - width * 2}px;
    height: ${size - width * 2}px;
    background: #fff;
    position: absolute;
    border-radius: 50%;

    &:after {
      display: inline-block;
      width: 100%;
      font-size: ${size / 3}px;
      color: #040404;
      text-align: center;
      line-height: ${size - width * 2}px;
      content: "${perc / 10}";
    }
  `;
  const Text = styled.span`
    align-self: center;
    padding: 2px 0 0 11px;
    border-bottom: solid 2px ${ScoreColor};
    border-left: solid 2px ${ScoreColor};
    border-top: solid 2px ${ScoreColor};
    border-radius: 10px 0 0 10px;
    width: 80%
  `;

  return (
    <Card>
      <Text>{props.text}</Text>
      <DonutChart>
        <QuadOne />
        <QuadTwo />
        <QuadThree />
        <QuadFour />
        <QuadTop />
        <ChartCenter />
      </DonutChart>
    </Card>
  );
};
