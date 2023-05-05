import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.prod";
import { environmentAlbum } from "../environments/environmentAlbum.prod";
import { environmentComment } from "../environments/environmentComment.prod";
import { environmentp } from "../environments/environmentp.prod";

@Injectable({
    providedIn : "root",
})

export class TestService {

    constructor(private http : HttpClient) {

    }
    getAllUsers(): Observable<any> {
        return this.http.get<any>(`${environment.apiBaseUrl}`)
    }
    getAllPosts(): Observable<any> {
        return this.http.get<any>(`${environmentp.apiBaseUrl}`)
    }
    getAllAlbums(): Observable<any> {
        return this.http.get<any>(`${environmentAlbum.apiBaseUrl}`)
    }
    getAllComments(): Observable<any> {
        return this.http.get<any>(`${environmentComment.apiBaseUrl}`)
    }
}   