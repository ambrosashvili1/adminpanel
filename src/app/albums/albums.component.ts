import { Component } from '@angular/core';
import { TestService } from '../services/test.sevice';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {

  albumInfos : any = [];

  constructor(private testService : TestService){

  }

  ngOnInit() : void {
    this.getAllAlbums();
  }
  getAllAlbums(){
    this.testService.getAllAlbums().subscribe((res)=>{
      this.albumInfos = res;
    })
  }
  selectIcon:string = '/assets/images/select.png';
  searchIcon:string = '/assets/images/search.png';
  decoreIcon:string = '/assets/images/decore.png';
  placeholderSelect:string = 'Select column';
  searchPlc:string = 'Searchi list...';

}
