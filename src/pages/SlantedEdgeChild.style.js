import styled from "styled-components";
export const SlantedEdgeChild = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: bottom right;
  transform: skew(-20deg);
  bottom: 0px;
  right: 0;
  top: 0;
  left: 0;
  background-color: #212121;
`;
