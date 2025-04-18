import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-vault-element',
  standalone: true,
  imports: [],
  templateUrl: './vault-element.component.html',
  styleUrl: './vault-element.component.scss'
})
export class VaultElementComponent {
  @Input() hover: boolean = false
}