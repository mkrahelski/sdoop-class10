interface IBlood{
    volume:number;
}

export interface ICustomBlood {
    typeofBLood:string;
    species:string;
    howMuchBlood:number;
}

export interface IpersonBlood {
    volume:number;
    HumanBlood:string
}

export interface IanimalBlood {
    volume:number;
    AnimalBlood:string;
}

export interface IbloodBank{
    volume:number;
    BloodPool:IBlood[];
    location:string
}