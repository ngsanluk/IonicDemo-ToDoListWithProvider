import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ToDoData {

  toDoItems: any[];

  constructor(public http: Http) {
    console.log('Hello ToDoData Provider');
    this.toDoItems = [
      {
        toDo: "Learn HTML",
        description: "Learn HTML coding",
        dueDate: "2017-07-17",
        priority: 1,
        notes: "Must finish bye 17 July"
      }
      , {
        toDo: "Learn CSS",
        description: "Learn CSS coding",
        dueDate: "2017-07-18",
        priority: 1,
        notes: ""
      }
      , {
        toDo: "Learn JavaScript",
        description: "Learn JavaScript coding",
        dueDate: "2017-07-19",
        priority: 1,
        notes: ""
      }
      , {
        toDo: "Learn npm",
        description: "Learn npm CLI",
        dueDate: "2017-07-20",
        priority: 2,
        notes: ""
      }
      , {
        "toDo": "Learn TypeScript",
        "description": "Learn TypeScript coding",
        "dueDate": "2017-07-21",
        "priority": 2,
        "notes:": ""
      }
    ];
  }

}
