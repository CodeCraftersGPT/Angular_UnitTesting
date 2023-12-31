import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://example.com/api/login';

    constructor(private http: HttpClient) { }

    postUser(user: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, user);
    }
}
