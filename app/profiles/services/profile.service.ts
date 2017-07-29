import { Injectable, NgZone } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import firebase = require("nativescript-plugin-firebase");
import 'rxjs/add/operator/share';

import { Profile } from './../models/profile.model';

@Injectable()
export class ProfileService {
    path = 'profiles';
    constructor(
        private ngZone: NgZone
    ) { }

    items: BehaviorSubject<Array<Profile>> = new BehaviorSubject([]);

    private _allItems: Array<Profile> = [];

    public getAllProfiles(): Observable<any> {
        return new Observable((observer: any) => {
            firebase.addValueEventListener((snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            }, `/${this.path}`);
        }).share();
    }

    public addProfile(profile: Profile) {
        profile.Date = firebase.ServerValue.TIMESTAMP;
        return firebase.push(`/${this.path}`, profile);
    }

    private handleSnapshot(data: any) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (let id in data) {
                let result = (<any>Object).assign({ id: id }, data[id]);
                this._allItems.push(result);
            }
            this.publishUpdates();
        }
        return this._allItems;
    }

    private publishUpdates() {
        // here, we sort must emit a *new* value (immutability!)
        this._allItems.sort(function (a, b) {
            if (a.Date > b.Date) return -1;
            if (a.Date < b.Date) return 1;
            return 0;
        })
        this.items.next([...this._allItems]);
    }
}