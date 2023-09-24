import styled from "styled-components";
import {RightArrowAlt} from "styled-icons/boxicons-regular";

export const LabelTwo = styled.div`
  padding-left: 3rem;
  padding-top: 3rem;
`;

export const TextTitle = styled.p<{theme: boolean}>`
  color: ${props => props.theme === true ? "#fff" : "#040404"};
  font-size: 15px;
  margin: auto 0;
  width: 100%;
  padding-left: 7px;
`;

export const Tag = styled(RightArrowAlt)`
  color: #0088ff;
  width: 26px;
  align-self: start;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 768px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 992px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
`;

export const Col2 = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  @media only screen and (max-width: 600px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 600px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 768px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  @media only screen and (min-width: 992px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
`;
