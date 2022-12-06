import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Item } from '../interfaces/item';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public todoList: Item[] = [
    {
      description: 'Learn JS',
      done: false,
    },
  ];
  @ViewChild('newTask') inputTask: ElementRef;

  constructor(private storage: TodoListStorageService) {}

  getTasks() {
    return this.storage.get();
  }
  addItem(description: string): Item[] {
    return this.storage.post(description);
    /*    this.allTasks.unshift({
      description,
      done: false,
    });*/
  }

  deleteTask(index: number): void {
    this.todoList.splice(index, 1);
  }

  markAsDone(index: number): void {
    this.todoList[index].done = !this.todoList[index].done;
  }
}
