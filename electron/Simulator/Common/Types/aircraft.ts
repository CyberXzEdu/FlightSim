import { FUEL } from "../fuel";
import { ELEC } from "../electric";
import { Engine } from "../engine";

export interface AircraftProps {
  fuel: FUEL;
  elec: ELEC;

  Engine_1: Engine;
  Engine_2: Engine;
}