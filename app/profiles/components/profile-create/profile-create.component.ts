import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

import { ProfileService } from './../../services/profile.service';

@Component({
    moduleId: module.id,
    selector: "profile-create",
    templateUrl: "profile-create.component.html",
    styleUrls: ["profile-create.component.css"]
})
export class ProfileCreateComponent {
    profile: any = {};
    constructor(
        private routerExtensions: RouterExtensions,
        private profileService: ProfileService
    ) { }

    goBack() {
        this.routerExtensions.back();
    }

    createProfile() {
        this.profileService.addProfile(this.profile).then((result) => {
            this.goBack();
        });
    }
}
