import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {
  
  public routes = routes;
  public deleteIcon1 = true;
  public deleteIcon2  = true;
  public selectedValue! : string ;

  deleteIconFunc1(){
    this.deleteIcon1 = !this.deleteIcon1
  }
  deleteIconFunc2(){
    this.deleteIcon2 = !this.deleteIcon2
  }
  constructor(private translate: TranslateService) {
    // Establece el idioma predeterminado
    this.translate.setDefaultLang('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); 
  }




  
selectedList1: data[] = [
  {value: 'Select'},
  {value: 'California'},
  {value: 'Tasmania'},
  {value: 'Auckland'},
  {value: 'Marlborough'},
];
selectedList2: data[] = [
  {value: 'India'},
  {value: 'London'},
  {value: 'France'},
  {value: 'USA'},
];



}
