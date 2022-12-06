import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public allTasks: Item[] = [
    {
      description: 'Learn JS',
      done: false,
    },
  ];
  @ViewChild('newTask') inputTask: ElementRef;

  constructor() {}

  getTasks() {
    return this.allTasks;
  }
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
