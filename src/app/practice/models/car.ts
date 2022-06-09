export interface Car {
  manufacturer: string;
  modelName: string;
  manufacturedYear: number;
  color: string;
  hasGas?: boolean;
  isNew?: boolean;
  doors?: Array<string>;
  antenna?: object;
}
