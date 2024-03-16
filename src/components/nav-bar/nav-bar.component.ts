import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

import { MegaMenuModule } from 'primeng/megamenu'

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MegaMenuModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  items: MegaMenuItem[] | undefined;

  ngOnInit(){
    this.items = [
      {
        label: "Inicio",
        icon: "pi pi-fw pi-home",
      },
      {
        label: "Explorar",
        icon: "pi pi-fw pi-compass"
      },
      {
        label: "Crear",
        icon: "pi pi-fw pi-pencil"
      },
      {
        label: "<input type='text' pInputText placeholder='Buscar'>",
        icon: "pi pi-fw pi-search",
        
      }
    ]
  }

}
