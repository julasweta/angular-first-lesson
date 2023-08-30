import { IUser } from 'src/app/interfaces/user.interface';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: IUser[]
  user: IUser


  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.DataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
