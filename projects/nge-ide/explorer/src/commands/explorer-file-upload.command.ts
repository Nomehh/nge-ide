import { Injectable } from '@angular/core';
import { CommandScopes } from '@mcisse/nge-ide/core';
import { FaIcon } from '@mcisse/nge/ui/icon';
import { ExplorerService } from '../explorer.service';
import { CommandGroups, IExplorerCommand } from './explorer.command';
import { PickerBrowserService } from '@mcisse/nge/services';
export const EXPLORER_COMMAND_FILE_UPLOAD = 'explorer.commands.file-upload';

@Injectable()
export class ExplorerCommandFileUpload implements IExplorerCommand {
    readonly id = EXPLORER_COMMAND_FILE_UPLOAD;
    readonly icon = new FaIcon('fas fa-upload');
    readonly group = CommandGroups.GROUP_CUT_COPY_PASTE;
    readonly label = 'Importer';
    readonly scope = [CommandScopes.EXPLORER_TREE];

    get enabled(): boolean {
        return this.explorerService.canUpload();
    }

    constructor(
        private readonly explorerService: ExplorerService,
        private readonly browserPickerService: PickerBrowserService,
    ) {}

    async execute() {
        const files = await this.browserPickerService.pickFiles({
            multiple: false
        });
        if (files.length) {
            this.explorerService.uploadFiles(files[0]);
        }
    }
}
