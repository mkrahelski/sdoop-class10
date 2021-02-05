import { type } from "os";
import { IanimalBlood, IpersonBlood, ICustomBlood, IbloodBank } from "./interfaces";


class Blood {

    volume: number;

}

class BloodTypeA extends Blood implements IanimalBlood {

    volume = 200;
    AnimalBlood: string = "Ace";
    species: string = "Reptellian.";

}


class BloodTypeB extends Blood implements IpersonBlood {

    volume = 500;
    HumanBlood: string = "Base";
    age: number = 30;

}

class UnkownBlood extends Blood implements ICustomBlood {

    typeofBLood: string;
    species: string;
    howMuchBlood: number;


    constructor(typeofBlood: string, species: string, howMuchBlood: number) {
        super(); //calls parent constructor?
        this.volume = howMuchBlood;
        this.species = species;
        this.typeofBLood = typeofBlood;
    }
}



class BloodBank extends Blood implements IbloodBank {

    BloodPool: Blood[] = [];
    location:string;
    

    get ownersBlood() {
        return this.BloodPool.map(BloodPool => BloodPool.volume).join(",");
    }

    addBlood(BloodPool: Blood) { //different classes are added to the blood bank. Based on Blood{volume:number};
    //they can have different arrays, featurettes, but they can all go into the BloodBank.
    //This is still a real weird concept. 
        this.BloodPool.push(BloodPool);
    }

    constructor(loc:string){
        super();
        this.location = loc;

    }


}

const DonorA = new BloodTypeB;
const DonorB = new BloodTypeB;
const DonorC = new BloodTypeA;
const CustomBloodMixX = new UnkownBlood("Super", "Krypto", 1000)

const SssssBloodBank = new BloodBank("SssssSSsstreeet");
const BorkerBloodBank = new BloodBank("Borker Street");


SssssBloodBank.addBlood(DonorA);
SssssBloodBank.addBlood(DonorB);
SssssBloodBank.addBlood(DonorB);
console.log(SssssBloodBank)


BorkerBloodBank.addBlood(CustomBloodMixX);
BorkerBloodBank.addBlood(DonorC);
console.log(BorkerBloodBank)
