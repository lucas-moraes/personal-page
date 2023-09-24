import styled from "styled-components";

export const LabelTwo = styled.div`
  padding-left: 3rem;
  padding-top: 3rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col1 = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media only screen and (max-width: 600px) {
    flex: 0 0 98.666667%;
    max-width: 98.666667%;
  }
  @media only screen and (min-width: 600px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media only screen and (min-width: 768px) {
    flex: 0 0 94%;
    max-width: 94%;
  }
  @media only screen and (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Col2 = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media only screen and (max-width: 600px) {
    flex: 0 0 98.666667%;
    max-width: 98.666667%;
  }
  @media only screen and (min-width: 600px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media only screen and (min-width: 768px) {
    flex: 0 0 94%;
    max-width: 94%;
  }
  @media only screen and (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
