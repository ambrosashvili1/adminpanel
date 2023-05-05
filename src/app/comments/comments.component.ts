import { Component } from '@angular/core';
import { TestService } from '../services/test.sevice';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  commentInfos : any = [];

  constructor(private testService : TestService){

  }

  ngOnInit(): void {
    this.getAllComments();
  }
  getAllComments(){
    this.testService.getAllComments().subscribe((res)=>{
      this.commentInfos = res;
    })
  }
  selectIcon:string = '/assets/images/select.png';
  searchIcon:string = '/assets/images/search.png';
  decoreIcon:string = '/assets/images/decore.png';
  placeholderSelect:string = 'Select column';
  searchPlc:string = 'Searchi list...';

}
