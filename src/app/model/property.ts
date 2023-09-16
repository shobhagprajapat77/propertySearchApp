import { IPropertyBase } from "./IPropertyBase.interface";
import { Photo } from "./photo";

export class Property implements IPropertyBase {
  Id!: number;
  SellRent!: number;
  Name!: string;
  PTypeId!: number;
  PType!: string;
  BHK!: number;
  FTypeId!: number;
  FType!: string;
  Price!: number;
  BuiltArea!: number;
  carpetArea?: number;
  address!: string;
  address2?: string;
  CityId!: number;
  City!: string;
  floorNo?: string;
  totalFloors?: string;
  RTM!: boolean;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: boolean;
  maintenance?: number;
  estPossessionOn?: string;
  Photo?: string;
  description?: string;
  Photos?: Photo[];
}
