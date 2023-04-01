import React from "react";
import styled, { useTheme } from "styled-components";

const Frame = styled.g`

`;

function Base () {
  const color = useTheme().display;

  return (
    <Frame transform="translate(0 668)">
      <path d="M4 0 H764 M256 0 v94 M512 0 v94"
        strokeLinecap="round"
        strokeWidth="3"
        stroke={color.white}
      />

      <text
        x="50"
        y="28"
      >TAT</text>
      <text
        x="50"
        y="58"
      >SAT</text>

      <text
        x="120"
        y="28"
        className="lime t24"
      >+23</text>

      <text
        x="120"
        y="58"
        className="lime t24"
      >+23</text>

      <text
        x="194"
        y="28"
        className="cyan t18"
      >°C</text>

      <text
        x="194"
        y="58"
        className="cyan t18"
      >°C</text>



      <text
        x="333"
        y="58"
        className="lime t26"
      >12&emsp;&nbsp;02</text>

      <text
        x="380"
        y="58"
        className="cyan t18"
      >H</text>



      <text
        x="540"
        y="28"
      >GW</text>

      <text
        x="694"
        y="28"
        textAnchor="end"
        className="lime"
      >46200</text>

      <text
        x="720"
        y="28"
        className="cyan t20"
      >KG</text>
    </Frame>
  );
}

export default Base;