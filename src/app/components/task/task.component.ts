import { Task } from './../../models/task.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  template: ` <div class="list-item {{ task?.state }}">
    <label class="checkbox">
      <input
        type="checkbox"
        [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
        disabled="true"
        name="checked"
      />
      <span
        class="checkbox-custom"
        (click)="onArchive(task.id)"
        attr.aria-label="archiveTask-{{ task?.id }}"
      ></span>
    </label>
    <div class="title">
      <input
        type="text"
        [value]="task?.title"
        readonly="true"
        placeholder="Input title"
      />
    </div>
    <div class="actions">
      <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
        <span class="icon-star" attr.aria-label="pinTask-{{ task?.id }}"></span>
      </a>
    </div>
  </div>`,
})
export class TaskComponent {
  @Input() task: Task;

  @Output()
  onPinTask = new EventEmitter<Event>();
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
