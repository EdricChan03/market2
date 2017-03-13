import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'version-dialog',
    templateUrl: './versiondialog.component.html'
})

export class VersionDialog implements OnInit {
    siteVersion: string;
    dependencyVersions: any;
    settings: any;
    isDarkTheme: boolean;

    ngOnInit() {
        this.siteVersion = "1.0.0";
        // TODO: Add dependencyVersions
        this.dependencyVersions = {};
        this.settings = JSON.parse(localStorage.getItem('settings')) || { 'isDarkTheme': true, 'name': 'Lorem ipsum', 'email': 'johnappleseed@gmail.com', 'birthday': '2003-12-23', 'showDeveloper': false };
        this.isDarkTheme = this.settings.isDarkTheme;
    }
}