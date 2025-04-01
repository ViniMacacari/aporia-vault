import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TransitionComponent } from "./components/transition/transition.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransitionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aporia-vault'
}
