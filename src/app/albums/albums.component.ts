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
  selectedAlbum!: Album ;

  /**Variable qui gère l'affichage des caractères (ou icons) [play] sur les albums en cours de lecture */
  status: string | undefined;

  constructor(){
    console.log(this.albums);
  }

  onSelect(alb: Album){
    // console.log("album dont on veut voir le détail", alb);
    this.selectedAlbum = alb;
  }

  playAlbum(a: Album){
  this.status = a.id;
  }
}
