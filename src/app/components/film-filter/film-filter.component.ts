import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-film-filter',
    templateUrl: './film-filter.component.html',
    styleUrls: ['./film-filter.component.css']
})
export class FilmFilterComponent implements OnInit {
    @Output() filter: EventEmitter<any> = new EventEmitter();

    searchItem: string;

    constructor() { }

    ngOnInit() {
    }

    onSubmit(): void {
        this.filter.emit(this.searchItem);
    }

}
