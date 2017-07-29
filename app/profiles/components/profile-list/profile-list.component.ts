import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { isAndroid } from "platform";

import { Profile } from './../../models/profile.model';
import { ProfileService } from './../../services/profile.service';

@Component({
    moduleId: module.id,
    selector: "profile-list",
    templateUrl: "profile-list.component.html",
    styleUrls: ["profile-list.component.css"]
})
export class ProfileListComponent implements OnInit {
    isLoaded: boolean = false;
    profiles$: Observable<Profile>;
    profileList: Array<Profile>;
    profileLoaded: Array<Profile>;
    @ViewChild('searchBar') searchBar: ElementRef;
    constructor(
        profileService: ProfileService
    ) {
        this.profiles$ = profileService.getAllProfiles();
    }

    ngOnInit() {
        this.profiles$.subscribe((snapshots: any) => {
            this.profileList = snapshots;
            this.profileLoaded = snapshots;
            this.isLoaded = true;
        });
    }

    initializeItems(): void {
        this.profileList = this.profileLoaded;
    }

    onSearchBarLoaded() {
        if (isAndroid) {
            this.searchBar.nativeElement.android.clearFocus();
        }
    }

    search(value: any) {
        this.initializeItems();
        let q = value;
        if (!q) { return; }
        this.profileList = this.profileList.filter((v) => {
            if (v.FirstName && q) {
                if (v.FirstName.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
                if (v.MiddleName.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
                if (v.LastName.toLowerCase().indexOf(q.toLowerCase()) > -1) { return true; }
                return false;
            }
        });
    }

    profileDetails(event) {
        let profile: Profile = this.profileList[event.index];
        console.dir(profile);
    }
}
