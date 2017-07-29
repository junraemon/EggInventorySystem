
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ProfileListComponent } from './components/profile-list/profile-list.component';

const routes: Routes = [
    { path: '', component: ProfileListComponent },
];

export const ProfilesRoutingModule = NativeScriptRouterModule.forChild(routes);
export { ProfileListComponent }