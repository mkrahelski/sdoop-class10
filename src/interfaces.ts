export interface Entity {
    name:string
}
export interface IPerson {
    name:string;
    age:number;
    haveAPet: Entity [];

}

export interface IFamily {
    familyMembers:Entity[];
    name:string
    haveAPet: Entity [];

}

// Business (is an Entity)
// has owner
export interface IBusiness{
    businessName:Entity[];
    owner_s:string[];

}

// Farm (is a Location, is a Business)
export interface IFarm {

    farmLocation:string;
    name:string;

}

export interface IAnimal {
    size: string;
    name:string;
    isPet: boolean;
}



//Vehicles

// Truck (is a Vehicle, can tow)

// Car (is a Vehicle, cannot tow)

//Trailers

// Horse Trailer (can hold 2 large animals)

// Cattle Trailer (can hold 20 Large Animals)

// Small Trailer (can hold 1 large animal)

export interface IVehicle {
   towing:boolean;

}

export interface ITrailer{
    trailerSize:number;
   //how many animals can fit
    animalWeight:number;
}
// export interface ICar extends IVehicle{
//
// }
// export interface ITruck extends IVehicle{


//}