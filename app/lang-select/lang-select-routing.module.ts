import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LangSelectComponent } from "./lang-select.component";

const routes: Routes = [
    { path: "", component: LangSelectComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LangSelectRoutingModule { }
