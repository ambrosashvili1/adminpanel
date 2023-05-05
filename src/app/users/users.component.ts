import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.sevice';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  userInfos : any = [];

  constructor(private testService : TestService) {

  }

  ngOnInit() : void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.testService.getAllUsers().subscribe((res)=>{
      this.userInfos = res;
    })
  }
  selectIcon:string = '/assets/images/select.png';
  searchIcon:string = '/assets/images/search.png';
  decoreIcon:string = '/assets/images/decore.png';
  placeholderSelect:string = 'Select column';
  searchPlc:string = 'Searchi list...';
}
