import { Component, Input, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() text: string = ''
  @Input() checked: boolean = false
  @Input() color: string = '#353f7c'
  @Output() checkedChange = new EventEmitter<boolean>()

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement
    this.checked = target.checked
    this.checkedChange.emit(this.checked)
  }

  toggleCheckbox(): void {
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
}