import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { T } from 'src/app/t.const';
import { WorklogTask } from '../../tasks/task.model';

@Component({
  selector: 'dialog-view-worklog-task',
  templateUrl: './dialog-view-worklog-task.component.html',
  styleUrls: ['./dialog-view-worklog-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogViewWorklogTaskComponent {
  task: WorklogTask;
  isNonArchiveTask: boolean;
  T: typeof T = T;

  constructor(
    private _matDialogRef: MatDialogRef<DialogViewWorklogTaskComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { task: WorklogTask; isNonArchiveTask: boolean },
  ) {
    this.task = this.data.task;
    this.isNonArchiveTask = this.data.isNonArchiveTask;
  }

  close(): void {
    this._matDialogRef.close();
  }
}
