import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  filter: 'all' | 'active' | 'done' = 'all';
  public allItems: Item[] = [
    {
      text: 'Etudier Angular',
      done: false,
    },
    {
      text: 'Faire du JavaScript',
      done: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getItems(): Item[] {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(text: string) {
    this.allItems.unshift({
      text,
      done: false,
    });
  }
}
