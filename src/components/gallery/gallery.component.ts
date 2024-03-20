import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  gallery: any;

  async ngOnInit(){
    this.gallery = await this.getPhotos();
    console.log("Gallery: ", this.gallery);
  }

  async getPhotos(){
    let photos = await axios.get('https://picsum.photos/v2/list?&limit=100');
    console.log("Photos: ", photos);
    return photos.data;
  }

}
