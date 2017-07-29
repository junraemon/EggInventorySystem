import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {
    ProfilesRoutingModule,
    ProfileListComponent,
    ProfileCreateComponent
} from './profiles.routing';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        ProfilesRoutingModule
    ],
    declarations: [
        ProfileListComponent,
        ProfileCreateComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProfilesModule { }
