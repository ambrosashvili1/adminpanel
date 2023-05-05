import { Component } from '@angular/core';
import { TestService } from '../services/test.sevice';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postInfos : any = [];

  constructor(private testService : TestService) {

  }

  ngOnInit() : void {
    this.getAllPosts();
  }
  getAllPosts() {
    this.testService.getAllPosts().subscribe((res)=>{
      this.postInfos = res;
    })
  }
  selectIcon:string = '/assets/images/select.png';
  searchIcon:string = '/assets/images/search.png';
  decoreIcon:string = '/assets/images/decore.png';
  placeholderSelect:string = 'Select column';
  searchPlc:string = 'Searchi list...';


}
