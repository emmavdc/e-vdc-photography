import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { DatasourceService } from 'src/app/services/datasource.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos : Photo[];

  constructor(private readonly dataSource: DatasourceService, 
              private readonly spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.photos = this.dataSource.getPhotos();
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);


  }

}
