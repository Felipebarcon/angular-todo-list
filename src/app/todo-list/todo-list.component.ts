import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  private todos: object[] = [
    {
      text: 'Je suis une todo',
      done: false,
      editMode: true,
    },
    {
      text: 'Faire du JavaScript',
      done: true,
      editMode: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
