import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'painel-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss'
})
export class MenuAdminComponent implements OnInit {

 public showMenu?: boolean;
public showController?: boolean;

  ngOnInit(){

  }

  openSideMenu(e: any) {  
    setTimeout(() => {
      this.showController= e.target.checked;
    }, 300);
    return this.showMenu = e.target.checked;
  }

}
