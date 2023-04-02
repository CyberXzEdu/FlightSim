/*
  ***   A32N Switches Datasheet   ***
  ID   TOP     TC      BOTTOM   BC

   0   FAULT   amber   OFF      white     

*/



export class Switch {
  instance = "switch_class";
  state = false;
  type = 0;

  top_led = false;
  bottom_led = false;

  constructor (type: number, defaultState?: boolean) {
    this.state = defaultState || false;
    this.type = type || 0;
  }
}