import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public allItems: string[] = ['Learn JS'];

  public newTask: string;
  constructor() {}

  ngOnInit(): void {}

  addItem() {
    if (this.newTask === '') {
    } else {
      this.allItems.unshift(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.allItems.splice(index, 1);
  }

  /*  getItems(): [] {
    return this.allItems.filter((item) => (item.done ? item.done : !item.done));
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }*/
}
