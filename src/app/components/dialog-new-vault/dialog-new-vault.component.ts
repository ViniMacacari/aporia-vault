import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  trigger,
  transition,
  style,
  animate,
  state,
  AnimationEvent
} from '@angular/animations'
import { ButtonComponent } from "../button/button.component"
import { CheckboxComponent } from "../checkbox/checkbox.component"
import { TextareaComponent } from "../textarea/textarea.component"
import { InputComponent } from "../input/input.component"

import { KeyTypeDetectorService } from '../../services/bitcoin/key-type-detector.service'

@Component({
  selector: 'app-dialog-new-vault',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CheckboxComponent, TextareaComponent, InputComponent],
  templateUrl: './dialog-new-vault.component.html',
  styleUrl: './dialog-new-vault.component.scss',
  animations: [
    trigger('elementTransition', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.8) translateY(20px)',
        filter: 'blur(3px)',
        height: '0',
        overflow: 'hidden',
        padding: '0',
        margin: '0'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1) translateY(0)',
        filter: 'blur(0)',
        height: '*'
      })),
      transition('hidden => visible', animate('350ms ease-out')),
      transition('visible => hidden', animate('250ms ease-in'))
    ])
  ]
})
export class DialogNewVaultComponent {
  @Input() isVisible: boolean = false
  @Output() onClose = new EventEmitter<void>()
  @Output() onConfirm = new EventEmitter<void>()

  newBtcAddress: boolean = true
  importBtcAddress: boolean = false
  btcAddress: string = ''
  validAddress: boolean = false
  textareaVisible: boolean = false

  deadWords: boolean = true
  fakeWallet: boolean = true
  base64: boolean = true
  digitalKey: boolean = true

  securePassword: string = ''
  confirmSecurePassword: string = ''

  constructor(
    private keyType: KeyTypeDetectorService
  ) { }

  close() {
    this.onClose.emit()
  }

  confirm(): void {
    this.onConfirm.emit()
  }

  onNewBtcAddressChange(checked: boolean) {
    this.newBtcAddress = checked
    this.importBtcAddress = !checked
  }

  onImportBtcAddressChange(checked: boolean) {
    this.importBtcAddress = checked
    this.newBtcAddress = !checked
  }

  onTextareaAnimationDone(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this.textareaVisible = false
    }
  }

  onBtcAddressChange(event: any): void {
    const result = this.keyType.detect(event)

    if (result === 'seed' || result === 'privateKey') {
      this.validAddress = true
    } else {
      this.validAddress = false
    }
  }
}