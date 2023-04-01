import { createColorSheet } from "@/Theme/sheet";
import React from "react";
import styled from "styled-components";

import Base from "../Shared/Base";

const Frame = styled.svg(createColorSheet);

function ELEC () {

  return (
    <>
      <Frame viewBox="0 0 768 768" className="display">
        <image y="15" href="/decals/elec.png"/>

        <Base/>
      </Frame>
    </>
  );
}

export default ELEC;