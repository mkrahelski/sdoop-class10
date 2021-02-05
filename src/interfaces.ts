import {Entity} from "./index";

export interface Ifamily extends Entity{
    Familyname:string[];
}


export interface Iperson extends Entity{
    PersonName:string;
    age:number;

}

// Business (is an Entity)
    // has owner
export interface IBuissness extends Entity{
    BuisnessName:string;
    owner:string[];

}

// Farm (is a Location, is a Business)
export interface IFarm extends IBuissness{

    FarmLocation:string;

}