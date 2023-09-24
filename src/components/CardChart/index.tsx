import React, {FunctionComponent} from "react";
import {TCardChartProps} from "./interface";
import {Card, ChartCenter, DonutChart, QuadFour, QuadOne, QuadThree, QuadTop, QuadTwo, TextTitle} from "./styles";

export const CardChart: FunctionComponent<TCardChartProps> = ({theme, text, score, scorecolor}) => {
  return (
    <Card>
      <TextTitle scorecolor={scorecolor} theme={theme}>
        {text}
      </TextTitle>
      <DonutChart theme={theme}>
        <QuadOne scorecolor={scorecolor} shadowscorecolor={scorecolor} score={score} />
        <QuadTwo scorecolor={scorecolor} shadowscorecolor={scorecolor} score={score} />
        <QuadThree scorecolor={scorecolor} shadowscorecolor={scorecolor} score={score} />
        <QuadFour scorecolor={scorecolor} shadowscorecolor={scorecolor} score={score} />
        <QuadTop theme={theme} score={score} />
        <ChartCenter theme={theme} score={score} />
      </DonutChart>
    </Card>
  );
};
