import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preclinic-angular';

  constructor(private translate: TranslateService) {
    TranslateModule
    // Establece el idioma por defecto
    translate.setDefaultLang('es');
  }
}
