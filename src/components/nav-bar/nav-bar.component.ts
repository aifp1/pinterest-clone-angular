import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    SplitButtonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  providers: [MessageService],
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] | undefined;
  value: string | undefined;

  activeInicio: boolean = false;
  activeExplorar: boolean = true;
  activeCrear: boolean = true;

  ngOnInit(){}
}
