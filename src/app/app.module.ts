import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageRefService } from './services/local-storage-ref.service';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LocalStorageRefService],
  bootstrap: [AppComponent],
})
export class AppModule {
  title: string = 'My Angular To Do List App';
}
