import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ProfileService } from './profiles/services/profile.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        ProfileService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
