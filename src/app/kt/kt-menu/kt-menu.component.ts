import { Component, Input, input, OnInit } from '@angular/core';
import { MenuComponent } from '../components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kt-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kt-menu.component.html',
  styleUrl: './kt-menu.component.scss'
})
export class KtMenuComponent implements OnInit {


  @Input() public icon: string | undefined = "fa-solid fa-grid-2";
  @Input() public iconclass: string | undefined = "btn-icon btn-icon-primary btn-active-light-primary";
  @Input() public menuclass: string | undefined = "menu-gray-700 menu-state-bg-primary w-250px";
  
  ngOnInit(): void {
    setTimeout(() => {
      MenuComponent.reinitialization();
    },100);        
  }


}
