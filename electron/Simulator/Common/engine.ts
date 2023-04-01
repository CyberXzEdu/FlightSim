import { Aircraft } from "../runner";

import { sendMessage } from "../..";

export class Engine {
  id: number;

  constructor (id: number) {
    this.id = id;
  }

  public run () {
    if (Aircraft.elec.ac.voltage && Aircraft.elec.ac.current) {
      
      if (Aircraft.fuel.total) {
        //
      }
    }

    sendMessage("ola mundo");
  }

}