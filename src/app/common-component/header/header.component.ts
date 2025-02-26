import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public routes = routes;
  public openBox = false;
  public miniSidebar = false;
  public addClass = false;

  constructor(
    public router: Router,
    private sideBar: SideBarService,
    private translate: TranslateService // Inyecta TranslateService aquí
  ) {

    this.translate.setDefaultLang('en');


    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }

  // Función para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang); 
  }


  openBoxFunc() {
    this.openBox = !this.openBox;
    const mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    if (this.openBox) {
      mainWrapper.classList.add('open-msg-box');
    } else {
      mainWrapper.classList.remove('open-msg-box');
    }
  }

  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }

  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
    this.addClass = !this.addClass;
    const root = document.getElementsByTagName('html')[0];
    const sidebar: any = document.getElementById('sidebar');

    if (this.addClass) {
      root.classList.add('menu-opened');
      sidebar.classList.add('opened');
    } else {
      root.classList.remove('menu-opened');
      sidebar.classList.remove('opened');
    }
  }
}