import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  @Output() messageEvent = new EventEmitter<string>();
  todoAdd!: string;

  updateInput(event: any) {
    this.todoAdd = event.target.value;
  }

  popUp() {
    if (this.todoAdd.trim()) {
      this.messageEvent.emit(this.todoAdd);
      this.todoAdd = '';
    }
  }
}
