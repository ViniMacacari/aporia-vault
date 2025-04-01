import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterTransitionService } from '../../services/transition/alter-transition.service'

@Component({
  selector: 'app-transition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transition.component.html',
  styleUrl: './transition.component.scss'
})
export class TransitionComponent {
  active: boolean = false

  constructor(
    private router: RouterTransitionService
  ) {
    this.router.visible$.subscribe(v => this.active = v)
  }
}