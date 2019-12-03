import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.component.html',
    styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
    public film: any;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.select('filmDetails').subscribe((state => this.film = state.film));
    }

}
