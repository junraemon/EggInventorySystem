import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
   { path: '', loadChildren: "./profiles/profiles.module#ProfilesModule" },
];

export const AppRoutingModule = NativeScriptRouterModule.forRoot(routes);