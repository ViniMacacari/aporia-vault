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
import { UnlockVaultService } from '../../services/vaults/unlock-vault.service'

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
  @Input() vaultName: string = ''
  @Output() onClose = new EventEmitter<void>()
  @Output() creating = new EventEmitter<void>()
  @Output() onCreate = new EventEmitter<any>()

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
  aporiaKeyPath: string | undefined = ''

  isClosing: boolean = false

  constructor(
    private keyType: KeyTypeDetectorService,
    private ireq: InternalRequestService,
    private unlockVault: UnlockVaultService
  ) { }

  close() {
    this.vaultName = ''
    this.securePassword = ''
    this.aporiaKeyPath = undefined

    this.isClosing = true
    setTimeout(() => {
      this.isClosing = false
      this.isVisible = false
      this.onClose.emit()
    }, 300)
  }

  async confirm(): Promise<void> {

    this.creating.emit()

    try {
      console.log({
        privateKey: this.securePassword,
        fileName: this.vaultName,
        filePathAporiaKey: this.aporiaKeyPath
      })

      const result = await this.unlockVault.openVault({
        privateKey: this.securePassword,
        fileName: this.vaultName,
        filePathAporiaKey: this.aporiaKeyPath
      })

      setTimeout(() => {
        this.onCreate.emit(result)
        this.close()
      }, 1500)
    } catch (error: any) {
      console.error('Error reading vault:', error)
    }
  }

  hasAporiaKey(checked: boolean) {
    this.newBtcAddress = checked
    this.importBtcAddress = !checked
    this.btcAddress = ''
    this.validAddress = false
  }

  hasAporiaKeyAnimation(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this.textareaVisible = false
    }
  }

  async onAporiaKeySelected(file: File): Promise<void> {
    const form = new FormData()
    form.append('file', file)

    try {
      const res = await this.ireq.post('/upload/aporia', form)
      this.aporiaKeyPath = res.filePath

      console.log('Path do arquivo salvo:', this.aporiaKeyPath)
    } catch (err) {
      console.error('Erro ao enviar arquivo:', err)
    }
  }
}