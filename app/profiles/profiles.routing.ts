import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileCreateComponent } from './components/profile-create/profile-create.component';

const routes: Routes = [
    { path: '', component: ProfileListComponent },
    { path: 'create', component: ProfileCreateComponent },
];

export const ProfilesRoutingModule = NativeScriptRouterModule.forChild(routes);
export {
    ProfileListComponent,
    ProfileCreateComponent
}