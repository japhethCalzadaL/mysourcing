import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData: UserInterface[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (data:any) => {
        this.userData = data.users
      },
      (error:any) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  goToCreateUser(): void {
    this.router.navigate(['/users']);
  }

}
