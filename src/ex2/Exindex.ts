import { setUncaughtExceptionCaptureCallback } from "process";
import { INamed, IOrganization, IPerson, } from "./Exinterfaces";


class Entity implements Entity{

    name: string;

}



class Organization extends Entity implements IOrganization {


    //get rid of the name because it's an entity
    owners:Entity[]=[];
//    owners:INamed[]=[];


    get ownerNames(){
        return this.owners.map(owner => owner.name).join(",");
    }
    
    addOwner( owner:INamed ){
        this.owners.push( Entity );
    }

}

class Person extends Entity implements IPerson {

    age:number;

    // get name(){
    //     return `${this.fname} ${this.lname}`;
    // }

    constructor( public fname:string, public lname:string ){
        super(); //calls parent constructor?
        this.name = `${fname} ${lname}`; // the name of entity = 
        //this class uses that interface. 
        //but the name for this class, to use Iperson interface has 
        //comes from entity not from person?? O_o super weird
        //why?
        
//in what circumstance does the interface need to match, an extended class?
// Would this just be signal TV, Remote, Others, extend signal, and then implement
//an array that checks for signal?


//does poly morphisim mean using an array-template, on a class, that's a combination
//either a consequence of mixons, or just heridatary is that polymorphism??????

    }

}

const acmeInc = new Organization();
acmeInc.name = "ACME Inc.";

const john = new Person("John","Doe");
acmeInc.addOwner(john);

console.log( acmeInc.ownerNames );