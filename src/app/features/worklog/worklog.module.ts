import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorklogComponent } from './worklog.component';
import { UiModule } from '../../ui/ui.module';
import { DialogWorklogExportComponent } from './dialog-worklog-export/dialog-worklog-export.component';
import { WorklogExportComponent } from './worklog-export/worklog-export.component';
import { FormsModule } from '@angular/forms';
import { WorklogWeekComponent } from './worklog-week/worklog-week.component';
import { DialogViewWorklogTaskComponent } from './dialog-view-worklog-task/dialog-view-worklog-task.component';
import { TasksModule } from '../tasks/tasks.module';

@NgModule({
  imports: [CommonModule, UiModule, FormsModule, TasksModule],
  declarations: [
    WorklogComponent,
    DialogWorklogExportComponent,
    WorklogExportComponent,
    WorklogWeekComponent,
    DialogViewWorklogTaskComponent,
  ],
  exports: [
    WorklogComponent,
    DialogWorklogExportComponent,
    WorklogExportComponent,
    WorklogWeekComponent,
  ],
})
export class WorklogModule {}
