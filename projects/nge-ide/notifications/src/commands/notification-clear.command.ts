import { Injectable } from "@angular/core";
import { CommandScopes, ICommand, NotificationService } from "@mcisse/nge-ide/core";
import { CodIcon } from "@mcisse/nge/ui/icon";

export const NOTIFICATION_COMMAND_CLEAR = 'notification.commands.clear';

@Injectable()
export class NotificationCommandClear implements ICommand {
    readonly id = NOTIFICATION_COMMAND_CLEAR;
    readonly icon = new CodIcon('trash');
    readonly label = 'Éffacer';
    readonly scope = [CommandScopes.INFOBAR];

    readonly enabled = true;

    constructor(private readonly notificationService: NotificationService) {}

    execute() {
        this.notificationService.clear();
    }
}