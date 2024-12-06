import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'painel-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss'
})
export class MenuAdminComponent implements OnInit {

 public open?: boolean;

  ngOnInit(){

  }


  openMenu(e: any) {
    return this.open = e.target.checked
  }

}
