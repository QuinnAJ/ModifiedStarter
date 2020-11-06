import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
    { path: "lang", loadChildren: () => import("./lang-select/lang-select.module").then(m => m.LangSelectModule) },
    { path: "profile-edit", loadChildren: ()=> import("./profile-creation/profile-creation.module").then(m=>m.ProfileCreationModule)}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
