import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProfileCreationComponent } from "./profile-creation.component";

const routes: Routes = [
    { path: "", component:ProfileCreationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProfileCreationtRoutingModule { }
