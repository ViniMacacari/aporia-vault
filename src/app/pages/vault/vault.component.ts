import { Component } from '@angular/core'
import { ActiveVaultsService } from '../../services/vaults/active-vaults.service'
import { RouterTransitionService } from '../../services/transition/alter-transition.service'

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.scss'
})
export class VaultComponent {
  constructor(
    private activeVaultsService: ActiveVaultsService,
    private router: RouterTransitionService
  ) { }

  vault: any = {}

  ngOnInit() {
    this.vault = this.activeVaultsService.getVaultInfo()
  }

  return() {
    this.router.navigate('/')
  }
}
