import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { LocalStorageRefService } from './services/local-storage-ref.service';
=======
>>>>>>> parent of 87a4b64 (implement task service)

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule],
<<<<<<< HEAD
  providers: [LocalStorageRefService],
=======
  providers: [],
>>>>>>> parent of 87a4b64 (implement task service)
  bootstrap: [AppComponent],
})
export class AppModule {
  title: string = 'My Angular To Do List App';
}
