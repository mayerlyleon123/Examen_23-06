import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
//crear una interface para definir propiedades que el componente lista va a tener
interface Componente {
icon: string;
name: string;
redirectTo: string;
}
@Component({
selector: 'app-inicio',
templateUrl: './inicio.page.html',
styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//crear nuevo listado
//componentes: any[] = [];
componentes: Componente[] = [
{
icon: 'paw-outline',
name: 'Action Sheet',
redirectTo: '/action-sheet'
},
{
  icon: 'notifications-outline',
  name: 'Alert',
  redirectTo: '/alert'
  },
  {
    icon: 'happy-outline',
    name: 'Avatar',
    redirectTo: '/avatar'
    },
    {
      icon: 'ellipsis-horizontal-circle-outline',
      name: 'Button',
      redirectTo: '/button'
      },
  ];
  constructor() { }
  ngOnInit() {
  } 
}
