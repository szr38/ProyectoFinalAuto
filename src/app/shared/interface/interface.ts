export interface pump {
  activity: boolean;
  pressure: number;
  rpm: number;
  temperature: number;
}

export interface tank {
  inlet_valve: boolean;
  level: number;
  level_max: number;
  outlet_valve: boolean;
}
