import { Injectable } from '@angular/core';
import { LocalStorageRefService } from './local-storage-ref.service';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class TodoListStorageService {
  private _localStorage: Storage;

  private _todoList$ = new BehaviorSubject<Item[] | null>(null);
  todoList$ = this._todoList$.asObservable();

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }
  setInfo(data: Item[]): void {
    const jsonData = JSON.stringify(data);
    this._localStorage.setItem('Item', jsonData);
    this._todoList$.next(data);
  }

  loadInfo(): void {
    const data = JSON.parse(this._localStorage.getItem('todoList'));
    this._todoList$.next(data);
  }

  clearInfo() {
    this._localStorage.removeItem('myData');
    this._todoList$.next(null);
  }

  clearAllLocalStorage(): void {
    this._localStorage.clear();
    this._todoList$.next(null);
  }
}
