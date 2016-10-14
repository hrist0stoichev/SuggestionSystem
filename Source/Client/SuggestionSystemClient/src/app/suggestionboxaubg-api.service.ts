import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SuggestionboxaubgApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://suggestionboxaubg.azurewebsites.net';
  }

  fetchSuggestions(page: number = 1, itemsPerPage: number = 20, orderBy: string = "DateCreated", onlyMine: boolean = false, onlyUpVoted: boolean = false): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Suggestions?page=${page}&itemsPerPage=${itemsPerPage}&orderBy=${orderBy}&onlyMine=${onlyMine}&onlyUpVoted=${onlyUpVoted}`)
      .map(response => response.json());
  }

  registerUser(email: string, password: string, confirmPassword: string){
    return this.http.post(`${this.baseUrl}/api/Account/Register`, {"Email": email, "Password":password, "ConfirmPassword":confirmPassword});

  }

  fetchComments(id: number, from: number, count: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Suggestions/${id}/comments?from=${from}&count=${count}`)
      .map(response => response.json());
  }
}
