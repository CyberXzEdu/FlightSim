import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import styled from "styled-components";

import { AircraftProps } from "electron/Simulator/Common/Types/aircraft";

import { BuildSwitch, SwitchInstanceType } from "../../Shared/Switches";

const Frame = styled.svg`
  width: 1120px;
  border: 1px solid white;
`;

function ELEC () {
  const [data, setData] = useState<AircraftProps>(null!);

  useEffect(() => {
    window.resizeTo(1150, 325);

    ipcRenderer.on("data", (_, data) => setData(data));

  }, []);


  return (
    <Frame viewBox="0 0 1120 260" className="panel">
      <rect
        width="1120"
        height="260"
        className="body"
      />

      <g>
        {
          data && (
            (function () {
              const base = [];

              for (const entry in data.elec.controls) {
                if (data.elec.controls[entry as "bat_1"].instance === "switch_class") {
                  const instance = data.elec.controls[entry as "bat_1"];
                  
                  base.push(new BuildSwitch(instance as SwitchInstanceType).build());
                }
              }

              return base;
            })()
          )
        }
      </g>
    </Frame>
  );
}

export default ELEC;