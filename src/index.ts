import { INamed, IOrganization, IPerson } from "./interfaces";

class Organization implements IOrganization {

    name:string;
    owners:INamed[]=[];

    get ownerNames(){
        return this.owners.map(owner => owner.name).join(",");
    }
    
    addOwner( owner:INamed ){
        this.owners.push( owner );
    }

}

class Person implements IPerson {

    age:number;

    get name(){
        return `${this.fname} ${this.lname}`;
    }

    constructor( public fname:string, public lname:string ){

    }

}

const acmeInc = new Organization();
acmeInc.name = "ACME Inc.";

const john = new Person("John","Doe");
acmeInc.addOwner(john);

console.log( acmeInc.ownerNames );