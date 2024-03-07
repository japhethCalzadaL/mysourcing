import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private token = 'd79eee6e-83ee-4b3c-b8b5-b212ad34257d'
  private apiPostalCodeUrl!: string;
  private apiUsers = `http://localhost:8080/user`;

  constructor(private http: HttpClient) {}

  getDataByPostalCode(postalCode: string): Observable<any> {
    this.apiPostalCodeUrl = `https://api.copomex.com/query/info_cp/${postalCode}?token=${this.token}`;

    return this.http.get(this.apiPostalCodeUrl);
  }

  createUser(users: UserInterface): Observable<any> {

    return this.http.post(this.apiUsers,users);
  }

  getUsers(): Observable<any> {

    return this.http.get(this.apiUsers);
  }

}
