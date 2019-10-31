export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    // warning: boolean;

    constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        // this.warning = false;
    }

    shouldShowWarning() :boolean {
        return true;

        // this.warning = true;
        // return this.warning;
        
        // return type.toLowerCase === 'space debris';

        // if (type.toLowerCase === "space debris") {
        //     return true;
        // } else {
        //     return false;
        // }  

        // for (i=0;i<satellites.length;i++) {
        //     if (satellite[i].type.toLowerCase === "space debris") {
        //         return true;
        //     } else {
        //         return false;
        //     }   
        // }
    }
    
}
