import { BaseData } from "./BaseData";

export interface PMData extends BaseData {
    name: string;
    confidence: number;
    class: string;
    party: string;
    yearTo: number;
  }
  