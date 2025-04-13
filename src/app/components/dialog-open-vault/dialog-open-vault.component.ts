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
import { InputComponent } from "../input/input.component"

import { KeyTypeDetectorService } from '../../services/bitcoin/key-type-detector.service'
import { InternalRequestService } from '../../services/request/internal-request.service'

@Component({
  selector: 'app-dialog-open-vault',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CheckboxComponent, InputComponent],
  templateUrl: './dialog-open-vault.component.html',
  styleUrl: './dialog-open-vault.component.scss',
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
export class DialogOpenVaultComponent {
  @Input() isVisible: boolean = false
  @Output() onClose = new EventEmitter<void>()
  @Output() creating = new EventEmitter<void>()
  @Output() onCreate = new EventEmitter<any>()

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

    try {
      let address: string = this.btcAddress

      if (this.newBtcAddress) {
        const newAddress: any = await this.ireq.post('/bitcoin/new', {})
        address = newAddress.content
      }

      this.creating.emit()

      const result = await this.ireq.post('/vaults/new', {
        settings: {
          fakeWallet: this.fakeWallet,
          aporiaKey: this.digitalKey
        },
        privateKey: this.securePassword,
        content: address,
        fileName: this.vaultName
      })

      this.onCreate.emit(result)

      this.vaultName = ''
      this.securePassword = ''
      this.confirmSecurePassword = ''
      this.digitalKey = true
      this.fakeWallet = true
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

  selectedAporiaFile(event: any): void {
    console.log('Selected file:', event)
  }
}