import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  photos : Photo[] = [
    
    {photoId : 1, source : "assets/cat-2.JPG"},
    {photoId : 2, source : "assets/flower.jpg"},
    {photoId : 3, source : "assets/butterfly.jpg"},
    {photoId : 4, source : "assets/duck.JPG"},
    {photoId : 5, source : "assets/cat-calpe.jpg"},
    {photoId : 6, source : "assets/rain.jpg"},
    {photoId : 7, source : "assets/flower-2.jpg"},
    {photoId : 8, source : "assets/london-1.JPG"},
    {photoId : 9, source : "assets/london-2.JPG"},
    {photoId : 10, source : "assets/london-4.JPG"},
    {photoId : 11, source : "assets/cat-3.jpg"},
    {photoId : 12, source : "assets/thuin.JPG"},
    ];

    getPhotos(){
      return this.photos;
    }

    getPhoto(id){
      return this.photos.filter(p => p.photoId == id)[0];
    }

    getUnActivePhotos(id){
      return this.photos.filter(p => p.photoId != id);
    }

  constructor(private readonly router: Router) { }
}
