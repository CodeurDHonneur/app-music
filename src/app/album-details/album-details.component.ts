import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Album, List } from '../albums';
import { ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnChanges {
  @Input() album!: Album;

  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  albumLists: List[] = ALBUM_LISTS;
  songs: string[] | undefined = [];



  /**
   * dans l'ordre :
   * le composant
   * ngOnInit
   * ngOnChange
   */
  /**
   * ngOnInit: se lance une fois à l'initialisation du composant
   */

  /**se lance:
   * une fois à l'initialisation du composant
   * directive qui se lance dès que quelque chose rentre dans le composant
   * via une propriété "Input"
   *
   */
  ngOnChanges(): void {
    //On vérifie que l'on a bien cliqué sur un album
    //avant de rechercher dans la liste des chansons
    if (this.album) {
      //récupérer la liste des chansons
      this.songs = this.albumLists.find(elem => elem.id === this.album.id)?.list;
    }
    console.log("ngOnChange appelé");
  }

  play(album: Album){
    this.onPlay.emit(album); //émettre l'album vers le parent
  }
}
