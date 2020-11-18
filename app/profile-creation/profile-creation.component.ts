import { Component, OnInit } from "@angular/core";
import { DomainOfActivity, IndustryFormat } from "~/industry-list";
import {ItemEventData} from "tns-core-modules/ui/list-view";
import {ScrollView,ScrollEventData} from "tns-core-modules/ui/scroll-view"


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
        console.log(`Index: ${args.index}; view:${args.view}; Item:${JSON.stringify(this.ActivityList[args.index])}`)
    }

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView;

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }
}
