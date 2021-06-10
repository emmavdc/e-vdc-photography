import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { DatasourceService } from 'src/app/services/datasource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  activePhoto : Photo;
  unActivePhotos : Photo[];

  constructor(private readonly dataSource: DatasourceService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.activePhoto = this.dataSource.getPhoto(id);
    this.unActivePhotos = this.dataSource.getUnActivePhotos(id);

  }

}
