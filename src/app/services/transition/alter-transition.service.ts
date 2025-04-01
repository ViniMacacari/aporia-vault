import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class RouterTransitionService {
  private visible = new BehaviorSubject(false)
  visible$ = this.visible.asObservable()

  constructor(private router: Router) { }

  navigate(url: string) {
    this.visible.next(true)

    setTimeout(() => {
      this.router.navigate([url])
    }, 1200)

    setTimeout(() => {
      this.visible.next(false)
    }, 3000)
  }

  openTransition() {
    this.visible.next(true)

    setTimeout(() => {
      this.visible.next(false)
    }, 3000)
  }
}