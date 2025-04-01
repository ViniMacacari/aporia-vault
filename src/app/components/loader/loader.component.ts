import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  trigger,
  transition,
  style,
  animate,
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
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-10%)',
          filter: 'blur(3px)'
        }),
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)',
          filter: 'blur(0)'
        }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-10%)',
          filter: 'blur(3px)'
        }))
      ])
    ])
  ]
})
export class LoaderComponent {
  @Input() isVisible: boolean = false
  closing: boolean = false
  animationState: 'hidden' | 'visible' = 'hidden'

  ngAfterViewInit() {
    if (this.isVisible && !this.closing) {
      setTimeout(() => {
        this.animationState = 'visible'
      }, 0)
    }
  }

  hide() {
    this.closing = true
    this.animationState = 'hidden'
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this.closing = false
      this.isVisible = false
    }
  }
}