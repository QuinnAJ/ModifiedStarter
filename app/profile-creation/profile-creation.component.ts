import { Component, OnInit } from "@angular/core";
import { DomainOfActivity, IndustryFormat } from "~/industry-list";
import {ItemEventData} from "tns-core-modules/ui/list-view";


@Component({
    selector: "ProfileCreate",
    moduleId: module.id,
    templateUrl: "./profile-creation.component.html",
    styleUrls: ["./profile-creation.component.css"]
})
export class ProfileCreationComponent implements OnInit {

    

    constructor(
        private activities: DomainOfActivity,
    ) {}

    ActivityList: Array<IndustryFormat>;



    ngOnInit(): void {

        this.ActivityList=this.activities.getSectors();// fetches sectors list within the component
    }

    onItemTap(args:ItemEventData){
        console.log(`Index: ${args.index}; vieew:${args.view}; Item:${this.ActivityList[args.index]}`)
    }
}
