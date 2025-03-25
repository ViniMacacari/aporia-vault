import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { VaultComponent } from './pages/vault/vault.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vault', component: VaultComponent }
]