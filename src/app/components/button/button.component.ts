import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Button'
  @Input() icon: string = ''
  @Input() width: string = ''
  @Input() color: string = '#7f508e'
}
