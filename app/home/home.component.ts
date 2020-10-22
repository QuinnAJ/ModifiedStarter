import { Component, OnInit } from "@angular/core";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import * as application from "tns-core-modules/application";
import { Router } from "@angular/router";
import * as Camera from "nativescript-camera";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
            if (this.router.url === '/home') {
              data.cancel = true; // prevents default back button behavior
            } else {
                data.cancel = false;
            }
          });
    }

    cameraSet() {
        console.log('click');
        Camera.requestPermissions();
        Camera.takePicture();
    }
}
