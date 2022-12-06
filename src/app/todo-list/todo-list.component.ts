import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from '../interfaces/item';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('newTask') inputTask: ElementRef;
  public todoList: Item[];
  constructor() {}

  ngOnInit(): void {}

  addItem(description: string): void {
    this.todoList = this.taskService.addItem(description);
    this.inputTask.nativeElement.value = ' ';
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }

  markAsDone(index: number): void {
    this.taskService.markAsDone(index);
  }
}
