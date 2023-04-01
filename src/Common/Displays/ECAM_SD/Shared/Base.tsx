import React from "react";
import styled from "styled-components";
import { createColorSheet } from "@/Theme/sheet";

const Frame = styled.g`
  
`;

function Base () {
  return (
    <Frame>
      <rect width={100} height={50} fill="white"/>
    </Frame>
  );
}

export default Base;