type Constructor = new (...args:any[]) => {};

import { IFamily, IPerson, IBusiness, IFarm, Entity, IAnimal, IVehicle, ITrailer} from './interfaces';



// this is person class i can add a new person by writing first and last name plus his age and also we can add a pet !.

class Person  implements IPerson {

    age:number;
    haveAPet:Entity[] = []

    constructor(public firstname:string, public lastname:string, public Age:number){

    }

    get name() {
        return `${this.firstname} ${this.lastname} ${this.Age}`
    }

    gotAPet(pet:Entity){
        this.haveAPet.push(pet);

    }



}
// testing person

// const trying = new Person('   ', '    ', 22)
// console.log(trying);




// family class: it allows us to add new family members and new families plus we can add a pet !.

class Family implements IFamily {

    name: string
    familyMembers: Entity[] = [];
    haveAPet: Entity[] = [];



    get displayMembers(){
        return this.familyMembers.map(family => family.name).join(",");
    }

    addNewMember(member:Entity){
        this.familyMembers.push(member);
    }
    gotAPet(pet:Entity){
        this.haveAPet.push(pet);

    }
}

        // testing person and family together.

        // const famFam = new family()

        // famFam.familyName = "alshahoud";

        // const famFam2 = new family()

        // famFam2.familyName = "khan";

        // const trying = new Person('angham', 'alshahoud', 22)
        // const trying2 = new Person('aliah', 'alshahoud', 27)

        // const trying3 = new Person('jack', 'khan', 12)
        // const trying4 = new Person('mike', 'khan', 30)

        // famFam.addNewMember(trying)
        // famFam.addNewMember(trying2)
        // famFam2.addNewMember(trying3)
        // famFam2.addNewMember(trying4)

        // console.log(famFam, 'second family ' , famFam2)

// this is a business class allows us to add new business and get what businesses we have.

class Business implements IBusiness{
    owner_s: string[] = [];
    businessName: Entity[] = [];

    get Business(){
        return this.businessName.map(business => business.name).join(",");
    }

    addNewBusiness(business:Entity){
        this.businessName.push(business);
    }

}

// testing business class by adding a family as a new business.

// const newFam = new family()
// newFam.name = 'jakijak';

// const buisness1 = new buisness()
// buisness1.owner_s = ['angham, aliah, jake'];

// buisness1.addNewBusiness(newfam);
// console.log(buisness1)

// farm class:

class Farm implements IFarm{
    farmLocation: string
    farmName: Entity[] =[];


    get name(){
        return ""
    }

    constructor(public nameFarm: Farm["name"]){

    }

    addAnAnimal(animal:Entity){
        this.farmName.push(animal)
    }
}

//testing the farm class by adding a farm as a buisness.

// const fame1 = new farm("alshahoudies")
// fame1.FarmLocation = "1365 highway 33 west ";

// const business = new business()

// buisis.addNewBusiness(fame1)
// buisis.owner_s = ["angham, me, and myself"]

// console.log(business)

class Animal implements IAnimal{
    size: string; // small, med, lrg
    isPet: boolean;

    get name(){
        return (
            `${this.animal_name} ${this.animalSize}`
        )

    }

    constructor(public animalType: string, public animal_name: string, public animalSize: Animal["size"]){

    }
}

// testing with adding a pet into a person, farm, and to a family.

// const newAnimal = new animal("cat","jody","small" )
// newAnimal.isPet= true;
// const farm2 = new farm("alshahoudies")
// farm2.FarmLocation = "canada, B.C, KELOWNA"

// const trying = new Person('angham', 'alshahoud', 22)

// const newfam = new family()
// newfam.name = 'jakijak';

// farm2.addAnAnimal(newAnimal)
// trying.gotApet(newAnimal);
// newfam.gotApet(newAnimal)

// console.log(farm2, trying, newfam)





// class Vehicle implements IVehicle{
//     towing:boolean;
// }
// class Truck implements IVehicle{
//     towing:true;
// }
// class Car implements IVehicle{
//     towing:false
// }
// class Trailer implements ITrailer {
//     largeAnimals: number;
// }
// class SmallTrailer implements ITrailer{
//     largeAnimals:1;
// }
//
// class MediumTrailer implements ITrailer {
//     largeAnimals:2;
// }
// class LargeTrailer implements ITrailer {
//     largeAnimals:20;
// }
// const horseTrailer = new LargeTrailer();
//
// const cattleTrailer = new MediumTrailer();
//
// const smallTrailer = new SmallTrailer();



 class Trailer implements ITrailer{
    public trailerSize:number;
     //how many animals can fit
    private canFit:number;
    public animalWeight:number;

    protected calcWeight(){
        if(this.animalWeight >= 100){
            return}
    }

   public set setTrailerSize(_trailerSize:number){
        switch(_trailerSize){
            case 1:
                this.canFit = 1;
                break; 
            case 2:
                this.canFit = 5;
                break; 
            case 3:
                this.canFit = 20;
                break; 
            default: console.log("Please enter a Trailer Size between 1-3");
                break;
            }
   } 

   public get getTrailerSize(){
       return this.trailerSize;
   }

   public get getAnimalsCanFit(){
       return this.canFit;
   }

    constructor(trailerSize:number){
        this.trailerSize = trailerSize;
        this.setTrailerSize = trailerSize;
    }
 }
const smallTrailer = new Trailer(2);
const medTrailer = new Trailer(2);
const lrgTrailer = new Trailer(3);



console.log(smallTrailer);


