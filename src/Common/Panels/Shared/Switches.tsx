import React from "react";

export interface SwitchInstanceType {
  instance: "switch_class";
  type: number;
  state: boolean;
  top_led: boolean;
  bottom_led: boolean;
}

export class BuildSwitch extends React.Component {
  instance: SwitchInstanceType;

  constructor (instance: SwitchInstanceType) {
    super(instance);
    this.instance = instance;
  }

  build () {
    return (
      <g>
        <rect
          width="50"
          height="50"
          fill="red"
        />
      </g>
    );
  }
}