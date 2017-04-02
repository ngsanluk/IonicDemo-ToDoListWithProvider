import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToDoItem } from '../../providers/to-do-item';
import { ToDoData } from '../../providers/to-do-data';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  item: ToDoItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
