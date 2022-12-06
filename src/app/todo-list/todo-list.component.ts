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
  @ViewChild('newValue') newValueTask: ElementRef;

  public todoList = this.taskService.todoList;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addItem(description: string): void {
    this.taskService.addItem(description);
    this.inputTask.nativeElement.value = ' ';
  }

  toggleEditTask(index: number): void {
    this.taskService.toggleEditTask(index);
  }

  saveEditTask(task: string, index: number): void {
    this.taskService.saveEditTask(task, index);
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }

  markAsDone(index: number): void {
    this.taskService.markAsDone(index);
  }
}
