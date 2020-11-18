import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    IsLoggingIn=true;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleForm(){
        this.IsLoggingIn=false
    }

    submit(){
        //create a profile class/interface; iinterface for data structures
        
    }
}
