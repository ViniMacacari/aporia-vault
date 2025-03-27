import { Component, Input, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() placeholder: string = ''
  @Input() border: string = ''
  @Input() model: string = ''
  @Output() modelChange = new EventEmitter<string>()
}