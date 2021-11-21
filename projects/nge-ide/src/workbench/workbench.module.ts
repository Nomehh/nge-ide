import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { AngularSplitModule } from 'angular-split';
import { NgeUiIconModule } from '@mcisse/nge/ui/icon';

import { CommandModule, DirectivesModule, FileModule } from '@mcisse/nge-ide/core';

import { WorkbenchComponent } from './workbench.component';


@NgModule({
    imports: [
        CommonModule,

        MatTooltipModule,
        MatProgressBarModule,
        NzTabsModule,

        FileModule,
        CommandModule,
        NgeUiIconModule,
        DirectivesModule,
        AngularSplitModule,
    ],
    exports: [
        WorkbenchComponent,
    ],
    declarations: [
        WorkbenchComponent,
    ]
})
export class WorkbenchModule {}
