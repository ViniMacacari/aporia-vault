import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: string = ''
  @Input() placeholder: string = ''
  @Input() model: string = ''
  @Output() modelChange = new EventEmitter<string>()
  @Output() fileSelected = new EventEmitter<File>()
  selectedFileName = ''

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      const file = input.files[0]
      this.selectedFileName = file.name
      this.fileSelected.emit(file)
    }
  }
}