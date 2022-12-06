import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  filter: 'all' | 'active' | 'done' = 'all';
  value: string;

  public allTasks: Item[] = [
    {
      description: 'Learn JS',
      done: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addItem(description: string) {
    this.allTasks.unshift({
      description,
      done: false,
    });
  }

  deleteTask(index: number) {
    this.allTasks.splice(index, 1);
  }

  markAsDone(index: number): void {
    this.allTasks[index].done = !this.allTasks[index].done;
  }
}
