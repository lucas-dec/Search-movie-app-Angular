import { Component, Input } from '@angular/core';
import { ActionType } from '../../../shared/models/action-type.enum'
import { ActionMessages } from '../../../shared/models/action-messages.enum'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input()
  actionMessage : ActionMessages

  @Input()
  actionType : ActionType

}
