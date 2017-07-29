import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ProfilesRoutingModule, ProfileListComponent } from './profiles.routing';

@NgModule({
    imports: [
        NativeScriptModule,
        ProfilesRoutingModule
    ],
    declarations: [ProfileListComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProfilesModule { }
