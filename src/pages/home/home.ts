import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ToDoItem } from '../../providers/to-do-item';
import { ToDoData } from '../../providers/to-do-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toDoItems: ToDoItem[];

  constructor(public navCtrl: NavController,
  private toDoData: ToDoData) {
    this.toDoItems = toDoData.toDoItems;
  }

  showDetails(item: ToDoItem): void {
    console.log(item);
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
