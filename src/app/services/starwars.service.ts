import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class StarWarsService {
    swapiUrl: string = 'https://swapi.co/api';

    todosLimit: string = '?_limit=5'; // String for limiting results from JSON Placeholder

    constructor(private http: HttpClient) { }

    getFilms(): Observable<any[]> {
        return this.http.get<any[]>(`${this.swapiUrl}/films/`);
    }

    getFilmDetails(filmId): Observable<any[]> {
        return this.http.get<any[]>(`${this.swapiUrl}/films/${filmId}`);
    }
}
