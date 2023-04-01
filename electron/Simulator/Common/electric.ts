//import { Aircraft } from "../runner";

import { Aircraft } from "../runner";

export class ELEC {
  dc = {
    voltage: 28,
    current: 4
  };

  ac = {
    voltage: 115,
    current: 25,
    frequency: 400
  };

  bat_1 = {
    voltage: 28,
    current: 4,
    charge: 1000
  };

  constructor () {
    //
  }

  public run () {
    this.dc.voltage -= 1;
    Aircraft.elec = this;
  }
}