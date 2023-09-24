import styled from "styled-components";

export const Label = styled.div`
z-index: -1;
margin-left: 45px;
display: flex;
justify-content: space-between;
position: absolute;
width: 85%;
`;

export const LabelOne = styled.div<{theme: boolean}>`
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
padding-left: 7px;
color: ${props => props.theme === true ? "#e4e4e4" : "#000000"};
font-family: "Lato", sans-serif;
font-size: 25px;
margin-bottom: 1.5rem;
margin-top: 5px;
`;