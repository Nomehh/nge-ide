import { Injectable } from '@angular/core';
import { CommandScopes, FileService, NotificationService, Paths } from '@mcisse/nge-ide/core';
import { DialogService } from '@mcisse/nge/ui/dialog';
import { CodIcon } from '@mcisse/nge/ui/icon';
import { ExplorerService } from '../explorer.service';
import { CommandGroups, IExplorerCommand } from './explorer.command';

export const EXPLORER_COMMAND_DELETE = 'explorer.commands.delete';

@Injectable()
export class ExplorerCommandDelete implements IExplorerCommand {
    readonly id = EXPLORER_COMMAND_DELETE;
    readonly icon = new CodIcon('trash');
    readonly group = CommandGroups.GROUP_MODIFICATION;
    readonly label = 'Supprimer';
    readonly scope = [CommandScopes.EXPLORER_TREE, CommandScopes.EXPLORER_TREE_HOVER];

    get enabled(): boolean {
        return this.explorerService.canDelete();
    }

    constructor(
        private readonly fileService: FileService,
        private readonly dialogService: DialogService,
        private readonly explorerService: ExplorerService,
        private readonly notificationService: NotificationService,
    ) { }

    async execute() {
        const selections = this.explorerService.selections();
        const size = selections.length;

        let title = '';
        let message = '';

        let doAction!: () => Promise<any>

        if (size > 1) {
            title = `Êtes-vous sûr de vouloir supprimer ces ${size} fichiers?`;
            if (selections.every((s) => s.isFolder)) {
                title = `Êtes-vous sûr de vouloir supprimer ces ${size} dossiers et leurs contenus?`;
            } else if (!selections.every((s) => !s.isFolder)) {
                title = `Êtes-vous sûr de vouloir supprimer ces ${size} dossiers/fichiers et leurs contenus?`;
            }

            message = selections.map((s) => Paths.basename(s.uri.path)).join('<br/>');
            doAction = () => this.fileService.deleteAll(selections);
        } else {
            const node = this.explorerService.focusedNode();
            if (!node) {
                return;
            }
            title = `Êtes-vous sûr de vouloir supprimer le fichier "${Paths.basename(node.uri.path)}"?`;
            if (node.isFolder) {
                title = `Êtes-vous sûr de vouloir supprimer le dossier "${Paths.basename(node.uri.path)}" et son contenu?`;
            }

            doAction = () => this.fileService.delete(node);
        }

        const confirmed = await this.dialogService.confirmAsync({
            title,
            message,
            noTitle: 'Annuler',
            okTitle: 'Supprimer',
        });

        if (confirmed) {
            try {
                await doAction();
            } catch (error) {
                this.notificationService.publishError(error);
            }
        }
    }
}