//import { Aircraft } from "../runner";

import { Aircraft } from "../runner";
import { Switch } from "./switch";

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

  controls = {
    bat_1: new Switch(0),
    bat_2: new Switch(0),
    apu_gen: new Switch(0),
    ext_power: new Switch(0),
    gen_1: new Switch(0),
    gen_2: new Switch(0),
    bus_tie: new Switch(0),
    ac_ess_feed: new Switch(0),
    idg_disc_1: new Switch(0),
    idg_disc_2: new Switch(0)
  };

  constructor () {
    //
  }

  public run () {
    this.dc.voltage -= 1;
    Aircraft.elec = this;
  }
}