import {Injectable} from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class IndustryFormat{
    constructor(
        public id: number,

        public name:string,

        public sector: string,
    ) {}
}// how to use contructor; conditions and good practices


/**
 * Hosts all the domains of activities; an array
 * @private Sectors
 * @package Has a getSectors() and getSpecificSectorById(id:number) function
 */
export class DomainOfActivity{
    private Sectors= new Array<IndustryFormat>(
        {id: 1, name:"Education", sector: "Professional Development" },
        {id: 2, name:"Evaluator", sector: "Professional Development" },
        {id: 3, name:"Career Strategist", sector: "Professional Development" },
        {id: 4, name:"Systems consultant", sector: "Professional Development" },
        {id: 5, name:"Systems Architect", sector: "Professional Development" },
        {id: 6, name:"Portfolio Manager", sector: "Professional Development" },
        {id: 7, name:"Tutor", sector: "Professional Development" },
        {id: 8, name:"Chess Teacher", sector: "Professional Development" },
        {id: 9, name:"Professional psychologist", sector: "Professional Development" },        
    );// on software architecture: class vs interface vs const
    

    
    getSectors():Array<IndustryFormat>{
        return this.Sectors;// the source itself is encapsulated
}

    getSpecificSectorById(id:number):IndustryFormat{
        return this.Sectors.filter((Sector)=>Sector.id===id)[0];
}// Sector represents every itteration


}

