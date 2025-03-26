import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from "../button/button.component"

@Component({
  selector: 'app-dialog-new-vault',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog-new-vault.component.html',
  styleUrl: './dialog-new-vault.component.scss'
})
export class DialogNewVaultComponent {
  @Input() isVisible: boolean = false
  @Output() onClose = new EventEmitter<void>()

  close() {
    this.onClose.emit()
  }
}