import React from "react";
import styled from "styled-components";
import "./style.scss";

export const CardChart = () => {
  const Card = styled.div`
    float: left;
    padding: 20px;
    margin: 0 20px 0 0;
  `;

  return (
    <Card>
      <div className="donut-chart chart3">
        <div className="quad one" />
        <div className="quad two" />
        <div className="quad three" />
        <div className="quad four" />
        <div className="quad top" />
        <div className="chart-center" />
      </div>
    </Card>
  );
};
