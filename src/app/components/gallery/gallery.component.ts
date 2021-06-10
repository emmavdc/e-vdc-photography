import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { DatasourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos : Photo[];

  constructor(private readonly dataSource: DatasourceService) { }

  ngOnInit(): void {
    this.photos = this.dataSource.getPhotos();
  }

}
