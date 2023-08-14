import { Component, Input } from '@angular/core';
import { Album } from '../albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
@Input() album!: Album | undefined;
test!: true;
}
