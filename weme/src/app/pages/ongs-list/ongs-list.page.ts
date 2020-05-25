import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OngInfoPage } from '../ong-info/ong-info.page';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-ongs-list',
  templateUrl: './ongs-list.page.html',
  styleUrls: ['./ongs-list.page.scss'],
})
export class OngsListPage {

  public ongs;

  constructor(
    public navCtrl: NavController
  ) {
    this.ongs = [
      {
        id: "1",
        name: "Fogão no rua",
        address: "Rua Tenente Negrão, 166",
        description: "Projeto atende moradores de rua de São Paulo."
      },
      {
        id: "2",
        name: "Palmital contra o coronavírus",
        address: "Rua das Acácias, 219",
        description: "Dois médicos se uniram para arrecadar equipamentos de proteção para profissionais de saúde"
      },
      {
        id: "3",
        name: "UniãoSP",
        address: "Av. Brasil, 748",
        description: "Iniciativa da sociedade civil para impedir uma crise humanitária em consequência do covid-19."
      },
      {
        id: "4",
        name: "Inst. Herdeiros do Futuro",
        address: "Rua Dr. Joaquim Ramos, 91",
        description: "É uma organização social sem fins lucrativos que atende pessoas carentes, vítimas de violência doméstica."
      }
    ]


  }
  getOngInfo(id) {
    this.navCtrl.navigateForward(OngInfoPage,
      {
        'ong_id': id
      });
  }
}
