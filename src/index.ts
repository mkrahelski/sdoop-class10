type Constructor = new (...args:any[]) => {​​​​}​​​​;

import { Ifamily, Iperson, IBuissness, IFarm } from './interfaces';

// Person (is an Entity)
// Family (Groups People, is an Entity)




function compose<P extends Constructor>(...mixins:Array<(Source:P)=>P>){​​​​

    return mixins.reduce(( lastMixin, mixin ) => {​​​​
    
    return mixin(lastMixin as P);
    
    }​​​​, class {​​​​}​​​​);
    
}​​​​

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

const Horse = compose(isHorse, isLarge, isAnimal)
console.log(Horse)






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

export class Entity {    
    type:string; //person, place, or thing, buisness or animal, or bigAnimal 
}