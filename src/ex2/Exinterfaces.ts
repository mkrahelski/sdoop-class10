export interface IPerson {

    name:string;
    age: number;

}

export interface IOrganization {

    name:string;
    owners: INamed[]

}

export interface INamed {

    name:string;

}