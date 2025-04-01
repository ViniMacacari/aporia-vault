import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  trigger,
  transition,
  style,
  animate,
  state,
  AnimationEvent
} from '@angular/animations'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [
    trigger('elementTransition', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-10%)',
        filter: 'blur(3px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)',
        filter: 'blur(0)'
      })),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('200ms ease-in'))
    ])
  ]
})
export class LoaderComponent {
  @Input() isVisible: boolean = false
  closing: boolean = false

  hide() {
    this.closing = true
  }  

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this.closing = false
      this.isVisible = false
    }
  }
}