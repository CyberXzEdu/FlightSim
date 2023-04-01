
import React from "react";
import styled from "styled-components";


import Base from "../Shared/Base";

const Frame = styled.svg`

`;

function ELEC () {

  return (
    <>
      <Frame viewBox="0 0 768 768" className="display">
        <image href="/decals/elec.png" opacity="0.3"/>

        <Base/>
      </Frame>
    </>
  );
}

export default ELEC;