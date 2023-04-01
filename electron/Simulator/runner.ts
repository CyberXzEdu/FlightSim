import { OpenedWindowsProps } from "..";

import { AircraftProps } from "./Common/Types/aircraft";
import { FUEL } from "./Common/fuel";
import { ELEC } from "./Common/electric";
import { Engine } from "./Common/engine";

function runner (OpenedWindows: OpenedWindowsProps) {
  return setInterval(() => loop(OpenedWindows), 1000);
}

export default runner;


// use ... = <any>{ ... }
export const Aircraft: AircraftProps = {
  fuel: new FUEL,
  elec: new ELEC,

  Engine_1: new Engine(1),
  Engine_2: new Engine(2)
};


//Aircraft.Engine_1 = new Engine(1);
//Aircraft.Engine_2 = new Engine(2);



function loop (OpenedWindows: OpenedWindowsProps) {


  Aircraft.elec.run();
  Aircraft.fuel.run();

  //Aircraft.elec.dc.voltage = 2;

  Aircraft.Engine_1.run();

  //console.log(Aircraft.elec.dc.voltage);


  if (typeof OpenedWindows["debug"] !== "undefined") {
    OpenedWindows["debug"].webContents.send("data", Aircraft);
  }
}