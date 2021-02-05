type Constructor = new (...args:any[]) => {​​​​}​​​​;

import { Ifamily, Iperson, IBuissness, IFarm } from './interfaces';

// Person (is an Entity)
// Family (Groups People, is an Entity)


 class Entity {    
    type:string; //person, place, or thing, buisness or animal, or bigAnimal 
}


class Person extends Entity implements Iperson {

    PersonName:string;
    age:number;

    constructor(fullname:string, age:number){
        super();
        this.PersonName = fullname;
        this.age = age;
    }   

}

const Jack = new Person("Jack Jackson", 22)

class Family extends Entity implements Ifamily{

    People:Iperson[];

    addToFamily(person:Iperson){

        this.People.push(person);
    }

}

class Buisness extends Entity implements IBuissness{

    BuisnessName:string;
    owner:string[];

    addToOwners(person:string){

        this.owner.push(person);
    }

    get stats() {
        return (this.BuisnessName, this.owner);

    }

}


class Farm extends Buisness implements IFarm {

    FarmLocation:string;

    constructor(farmLocation:string, BuisnessName:string, ){
        super();
        this.FarmLocation = farmLocation;
        this.BuisnessName = BuisnessName;
    }

}

const a = new Farm("Space", "SuperSpace");
a.addToOwners;//good


const x = new Buisness;

console.log(x.stats);









// function compose<P extends Constructor>(...mixins:Array<(Source:P)=>P>){​​​​

//     return mixins.reduce(( lastMixin, mixin ) => {​​​​
    
//     return mixin(lastMixin as P);
    
//     }​​​​, class {​​​​}​​​​);
    
// }​​​​

// // Pet (is an Animal, has a name, belongs to a person or family)

// function isaPet<Animal extends Constructor>(animal:Animal ){

//     return class extends animal{

//         pet(){

//         }
//         name:string; 
//     }

// }

//Farm Animal (is an Animal, belongs to a Farm)
function isAnimal<Animal extends Constructor>(animal:Animal ){

    return class extends animal{
        isAnimal(){

        }
        // name:string; 
        // owner:Iperson;
        type:string = "Animal";
        

    }

}

// // Horse (is a Farm Animal, has a name, is a Large Animal)
// // Cow (is a Farm Animal, is a Large Animal)
function isLarge<Animal extends Constructor>(animal:Animal ){

    return class extends animal{
        // isLarge(){

        // }
        
    //    name:string;
    //    owner:IFarm;

        isLarge:Boolean = true;

    }

}

function isHorse<Animal extends Constructor>(animal:Animal ){

    return class extends animal{
    
        name:string = "Horse"; 
        // owner:Iperson;
    }

}







// Dog // Cat

class AnimalType{
    name:string;

}


//vehicles
    // Truck (is a Vehicle, can tow)
    // Car (is a Vehicle, cannot tow)

class Vehicle {
    type:string;
    canTow:Boolean;
}


class Trailer extends Vehicle {
    type = "";
    size:string;
    canHold:number
    animalSize:string = "Large"; 

}

    // Horse Trailer (can hold 2 large animals)
    // Cattle Trailer (can hold 20 Large Animals)
    // Small Trailer (can hold 1 large animal)

