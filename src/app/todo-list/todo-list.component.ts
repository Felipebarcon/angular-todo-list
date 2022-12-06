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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addItem(description: string): void {
    this.todoList.unshift({
      description,
      done: false,
    });
    this.inputTask.nativeElement.value = ' ';
  }

  deleteTask(index: number): void {
    this.todoList.splice(index, 1);
  }

  markAsDone(index: number): void {
    this.todoList[index].done = !this.todoList[index].done;
  }
}
