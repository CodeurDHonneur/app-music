import { Component } from '@angular/core';
import { ALBUMS } from '../mock-albums';
import { Album } from '../albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})


export class AlbumsComponent {
  titlePage: string = "Page principale Albums Music";
  albums: Album[] = ALBUMS;
  constructor(){
    console.log(this.albums);
  }
}
