import { Component, OnInit } from "@angular/core";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import * as application from "tns-core-modules/application";
import { Router } from "@angular/router";
import * as Camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    value:number;
    error=false;



    constructor(private router: Router) {
    }

    ngOnInit(): void {
        application.android.on(AndroidApplication.activityBackPressedEvent,
             (data: AndroidActivityBackPressedEventData) => {
            if (this.router.url === '/home') {
              data.cancel = true; // prevents default back button behavior
            } else {
                data.cancel = false;
            }

          });
          this.doAsyncTask(() => console.log("Callback called"));
          // (1)
          // console.log function is the function taken as input cb()

        

          
              
            

          
    }

    cameraSet() {
        var options={width :300, height:300, keepAspectRatio: false, saveToGallery: true};
        console.log('click');
        if (Camera.isAvailable()){
            Camera.requestPermissions();
        Camera.takePicture(options) // options is inserted here as an input; optional
        .then((NewPic)=>{
            console.log("Result is an image asset instance");
            console.log("Size: " + NewPic.options.width + "x" + NewPic.options.height);
            console.log("keepAspectRatio: " + NewPic.options.keepAspectRatio);
            console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
            var img=new Image();
            img.src=NewPic;
            // const l= img.getMeasuredHeight();
            // const w=img.getMeasuredState();// returns 0x0 ?
            // console.log("Dimensions: " + l + "x" +w);
        })
        .catch((err)=>{
            console.log("Error ->" + err.message)
        });        
        }
        this.doAsyncTask2()
          .then(
              ()=>{console.log("callback2 Called")},
          // (2)
          // first parameter of the promise
          // the resolve function
          // .then a success handler
          // possible to pass an imput to the handler functions using resolve (args)/reject ('args')
          // 
              ()=>{console.log("error")}
          // second parameter of the promise
          // error handler
          )

          .catch(
              (err)=>{
                  console.error(err)
              }
          )
    }// promise dynamics; will try to use observables


    doAsyncTask(cb:any) {// (1)using classic callbacks
        setTimeout(() => {// delays the calling of a function; asynchronous stuff
         console.log("Calling Callback")//will return immediatly 
          cb();// function that will be called asynchronously; taken in as input variable;
          
        }, 1000);
      }

    // implementing same function using the promise API's (2)

    doAsyncTask2(){
        
        var promise= new Promise((resolve, reject)=>{
            setTimeout(()=>{ 
                console.log("Calling callBack2");
                if (this.error){//error is false
                   reject();// instead of cb()if it works
                }else{
                    resolve();
                }
                
              }, 1000)
            });
            
               
        return promise
        }
        
    




      

}
