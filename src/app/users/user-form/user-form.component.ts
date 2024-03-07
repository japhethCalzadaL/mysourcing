import { Component,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @ViewChild('userForm') userForm!: NgForm;

  postalCode!: string;
  responseData!: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  onSubmit(): void {
    const form = this.userForm;
    const name = form.controls['name'].value;
    const lastName = form.controls['lastName'].value;
    const lastSecondName = form.controls['lastSecondName'].value;
    const email = form.controls['email'].value;
    const phone = form.controls['phone'].value;
    const postalCode = form.controls['postalCode'].value;
    const state = form.controls['state'].value;

    const user = {
      name,
      lastName,
      lastSecondName,
      email,
      phone,
      postalCode,
      state
    };

    this.apiService.createUser(user).subscribe(
      (data:any) => {
        this.router.navigate(['/users-list']);
      },
      (error:any) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  onPostalCodeChange(): void {
    const form = this.userForm;
    if (this.postalCode.length == 0) {
      form.controls['state'].setValue("");
    }

    if (this.postalCode.length == 5) {
      this.apiService.getDataByPostalCode(this.postalCode).subscribe(
        (data:any) => {
          this.responseData = data[0].response.ciudad;

          form.controls['state'].setValue(this.responseData);
        },
        (error:any) => {
          console.error('Error al obtener datos:', error);
        }
      );
    }
  }

  goToUserList(): void {
    this.router.navigate(['/users-list']);
  }
}
