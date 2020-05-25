import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.page.html',
  styleUrls: ['./signup-one.page.scss'],
})
export class SignupOnePage implements OnInit {

  public userRegister: User = {};
  private loading: any;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }
  async register() {
    await this.presentLoading();
    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'loadingRegister',
      message: 'Por favor, aguarde...'
    });
    return this.loading.present();
  }

}
