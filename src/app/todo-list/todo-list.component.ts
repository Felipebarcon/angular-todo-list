import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  filter: 'all' | 'active' | 'done' = 'all';
  @ViewChild('newTask') inputTask: ElementRef;

  public allTasks: Item[] = [
    {
      description: 'Learn JS',
      done: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addItem(description: string): void {
    this.allTasks.unshift({
      description,
      done: false,
    });
    this.inputTask.nativeElement.value = ' ';
  }

  deleteTask(index: number): void {
    this.allTasks.splice(index, 1);
  }

  markAsDone(index: number): void {
    this.allTasks[index].done = !this.allTasks[index].done;
  }
}
