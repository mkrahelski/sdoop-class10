

// export interface Entity {
//     type:string;

// }

export interface Ifamily {
    People:Iperson[];
}


export interface Iperson {
    PersonName:string;
    age:number;

}

// Business (is an Entity)
    // has owner
export interface IBuissness{
    BuisnessName:string;
    owner:string[];

}

// Farm (is a Location, is a Business)
export interface IFarm extends IBuissness{

    FarmLocation:string;

}