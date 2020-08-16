import { BaseData } from "./BaseData";

export interface Events extends BaseData {
    type: string,
    desc: string,
}