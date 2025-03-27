import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from "../button/button.component"
import { CheckboxComponent } from "../checkbox/checkbox.component"
import { TextareaComponent } from "../textarea/textarea.component"

@Component({
  selector: 'app-dialog-new-vault',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CheckboxComponent, TextareaComponent],
  templateUrl: './dialog-new-vault.component.html',
  styleUrl: './dialog-new-vault.component.scss'
})
export class DialogNewVaultComponent {
  @Input() isVisible: boolean = false
  @Output() onClose = new EventEmitter<void>()
  @Output() onConfirm = new EventEmitter<void>()

  newBtcAddress: boolean = true
  importBtcAddress: boolean = false
  btcAddress: string = ''

  deadWords: boolean = true
  fakeWallet: boolean = true
  base64: boolean = true
  digitalKey: boolean = true

  close() {
    this.onClose.emit()
  }

  confirm(): void {
    this.onConfirm.emit()
  }
}