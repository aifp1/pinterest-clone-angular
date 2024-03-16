import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimengModule } from '../modules/primeng/primeng.module'

import { NavBarComponent } from '../components/nav-bar/nav-bar.component'
import { GalleryComponent } from '../components/gallery/gallery.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //Components
    NavBarComponent,
    GalleryComponent,
    //Modules
    PrimengModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pinterest-clone-angular';
}
