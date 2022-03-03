import styled from "styled-components";

export const OrangeBox = styled.div`
  position: absolute;
  /* top:50%; */
  bottom: 30%; 
  width:10%;
  height:30%;
  right: 35%;
  top:25%;
  z-index:1;

  transform-origin: bottom right;
  transform: skew(-20deg);
  background: orange;
`;