import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public todoList: Item[] = [
    {
      description: 'Learn JS',
      done: false,
      editMode: false,
    },
  ];
  @ViewChild('newTask') inputTask: ElementRef;
  @ViewChild('newValue') newValueTask: ElementRef;

  addItem(description: string): void {
    this.todoList.unshift({
      description,
      done: false,
    });
  }

  editTask(index: number): void {
    this.todoList[index].editMode = !this.todoList[index].editMode;
  }

  saveTask(task: string, index: number): void {
    this.todoList[index].description = task;
    this.todoList[index].editMode = false;
  }
  deleteTask(index: number): void {
    this.todoList.splice(index, 1);
  }

  markAsDone(index: number): void {
    this.todoList[index].done = !this.todoList[index].done;
  }

  constructor() {}
}
