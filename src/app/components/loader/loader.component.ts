import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() isVisible: boolean = false
  closing: boolean = false

  hide() {
    this.closing = true
    setTimeout(() => {
      this.closing = false
      this.isVisible = false
    }, 300)
  }
}