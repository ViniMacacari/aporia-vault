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
import { InternalRequestService } from '../../services/request/internal-request.service'

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
  vaultName: string = ''
  validAddress: boolean = false
  textareaVisible: boolean = false

  deadWords: boolean = true
  fakeWallet: boolean = true
  base64: boolean = true
  digitalKey: boolean = true

  securePassword: string = ''
  confirmSecurePassword: string = ''

  isClosing: boolean = false

  constructor(
    private keyType: KeyTypeDetectorService,
    private ireq: InternalRequestService
  ) { }

  close() {
    this.isClosing = true
    setTimeout(() => {
      this.isClosing = false
      this.isVisible = false
      this.onClose.emit()
    }, 300)
  }

  async confirm(): Promise<void> {
    if (this.securePassword != this.confirmSecurePassword) return

    console.log(this.vaultName)
    console.log(this.btcAddress)
    console.log(this.newBtcAddress)
    console.log(this.fakeWallet)
    console.log(this.digitalKey)

    try {
      let address: string = this.btcAddress

      if (this.newBtcAddress) {
        const newAddress: any = await this.ireq.post('/bitcoin/new', {})
        address = newAddress.content
      }

      console.log(address)

      const result = await this.ireq.post('/vaults/new', {
        settings: {
          fakeWallet: this.fakeWallet,
          aporiaKey: this.digitalKey
        },
        privateKey: this.securePassword,
        content: address,
        fileName: this.vaultName
      })

      console.log(result)
    } catch (error: any) {
      console.error(error)
    }
  }

  onNewBtcAddressChange(checked: boolean) {
    this.newBtcAddress = checked
    this.importBtcAddress = !checked
    this.btcAddress = ''
    this.validAddress = false
  }

  onImportBtcAddressChange(checked: boolean) {
    this.importBtcAddress = checked
    this.newBtcAddress = !checked
    this.btcAddress = ''
    this.validAddress = false
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